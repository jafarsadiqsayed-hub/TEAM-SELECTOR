// Storage, Synchronization, and Import/Export Manager
const DEFAULT_PASSWORDS = {
  admin: "admin",
  public: ""
};

class StorageManager {
  constructor() {
    this.STUDENTS_KEY = 'kanniyath_arts_fest_students_v4';
    this.SETTINGS_KEY = 'kanniyath_arts_fest_settings_v4';
    this.HISTORY_KEY = 'kanniyath_arts_fest_history_v4';
    this.PASSWORDS_KEY = 'kanniyath_arts_fest_passwords_v4';
    this.SESSION_ROLE_KEY = 'kanniyath_arts_fest_session_role_v4';
    this.SYNC_CHANNEL_NAME = 'kanniyath_live_sync_channel';

    this.broadcastChannel = null;
    this.initBroadcastChannel();
  }

  initBroadcastChannel() {
    if ('BroadcastChannel' in window) {
      try {
        this.broadcastChannel = new BroadcastChannel(this.SYNC_CHANNEL_NAME);
        this.broadcastChannel.onmessage = (event) => {
          if (event && event.data && window.app) {
            window.app.handleRemoteSync(event.data);
          }
        };
      } catch (err) {
        console.warn('BroadcastChannel not supported or restricted:', err);
      }
    }

    // Fallback sync using storage events
    window.addEventListener('storage', (e) => {
      if ([this.STUDENTS_KEY, this.SETTINGS_KEY, this.HISTORY_KEY].includes(e.key)) {
        if (window.app) {
          window.app.loadFromStorage(false);
        }
      }
    });
  }

  broadcast(type, payload = {}) {
    const message = { type, payload, timestamp: Date.now(), sourceId: window.appSessionId };
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(message);
      } catch (e) {
        console.warn('Broadcast failed:', e);
      }
    }
  }

  // =========================================================================
  // Auth & Roles
  // =========================================================================
  getPasswords() {
    const raw = localStorage.getItem(this.PASSWORDS_KEY);
    if (!raw) {
      this.savePasswords(DEFAULT_PASSWORDS, false);
      return { ...DEFAULT_PASSWORDS };
    }
    try {
      return { ...DEFAULT_PASSWORDS, ...JSON.parse(raw) };
    } catch (e) {
      return { ...DEFAULT_PASSWORDS };
    }
  }

  savePasswords(passwords, shouldBroadcast = true) {
    localStorage.setItem(this.PASSWORDS_KEY, JSON.stringify(passwords));
    if (shouldBroadcast) {
      this.broadcast('PASSWORDS_UPDATED', { passwords });
    }
  }

  getCurrentRole() {
    return sessionStorage.getItem(this.SESSION_ROLE_KEY) || localStorage.getItem(this.SESSION_ROLE_KEY) || null;
  }

  setCurrentRole(role, remember = true) {
    if (role) {
      sessionStorage.setItem(this.SESSION_ROLE_KEY, role);
      if (remember) {
        localStorage.setItem(this.SESSION_ROLE_KEY, role);
      }
    } else {
      sessionStorage.removeItem(this.SESSION_ROLE_KEY);
      localStorage.removeItem(this.SESSION_ROLE_KEY);
    }
  }

  logout() {
    this.setCurrentRole(null);
  }

  verifyCredentials(username, password) {
    if (!username) return null;
    const u = username.trim().toLowerCase();
    const p = (password || '').trim();
    const passwords = this.getPasswords();

    // Public Viewer requires NO password
    if (u === 'public' || u === 'viewer' || u === 'audience' || u === 'guest') {
      return 'public';
    }

    if ((u === 'admin' || u === 'administrator') && p === (passwords.admin || 'admin')) {
      return 'admin';
    }

    return null;
  }

  // =========================================================================
  // Students & Settings
  // =========================================================================
  getStudents() {
    const raw = localStorage.getItem(this.STUDENTS_KEY);
    if (!raw) {
      this.saveStudents(DEFAULT_STUDENTS);
      return JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
    }
    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0 || (parsed[0] && !['Sub Junior', 'Junior', 'Senior'].includes(parsed[0].section))) {
        this.saveStudents(DEFAULT_STUDENTS);
        return JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
      }
      return parsed;
    } catch (e) {
      console.error('Error parsing students from localStorage, restoring defaults:', e);
      return JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
    }
  }

  saveStudents(students, shouldBroadcast = true) {
    localStorage.setItem(this.STUDENTS_KEY, JSON.stringify(students));
    if (shouldBroadcast) {
      this.broadcast('STUDENTS_UPDATED', { students });
    }
  }

  getSettings() {
    const raw = localStorage.getItem(this.SETTINGS_KEY);
    if (!raw) {
      this.saveSettings(DEFAULT_SETTINGS);
      return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
    }
  }

  saveSettings(settings, shouldBroadcast = true) {
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
    if (shouldBroadcast) {
      this.broadcast('SETTINGS_UPDATED', { settings });
    }
  }

  getHistory() {
    const raw = localStorage.getItem(this.HISTORY_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }

  saveHistory(history, shouldBroadcast = true) {
    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
    if (shouldBroadcast) {
      this.broadcast('HISTORY_UPDATED', { history });
    }
  }

  resetAllToDefault() {
    this.saveStudents(DEFAULT_STUDENTS, false);
    this.saveSettings(DEFAULT_SETTINGS, false);
    this.saveHistory([], false);
    this.savePasswords(DEFAULT_PASSWORDS, false);
    this.broadcast('FULL_RESET', {
      students: DEFAULT_STUDENTS,
      settings: DEFAULT_SETTINGS,
      history: []
    });
  }

  // Export current rosters and student database to CSV
  exportToCSV(students, settings) {
    const headers = ["ID", "Student ID", "Name", "Section", "Status", "Assigned Team", "Selection Order", "Selection Time"];
    const rows = students.map(s => {
      let teamName = "None";
      if (s.team === "team-a") teamName = settings.teamA.name;
      else if (s.team === "team-b") teamName = settings.teamB.name;

      return [
        `"${s.id || ''}"`,
        `"${s.rollNo || ''}"`,
        `"${(s.name || '').replace(/"/g, '""')}"`,
        `"${s.section || ''}"`,
        `"${s.status || 'available'}"`,
        `"${teamName}"`,
        `"${s.selectionOrder || ''}"`,
        `"${s.selectedAt || ''}"`
      ];
    });

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    link.setAttribute("href", url);
    link.setAttribute("download", `Arts_Fest_Team_Selection_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Export full backup JSON
  exportBackupJSON(students, settings, history) {
    const data = {
      exportDate: new Date().toISOString(),
      festTitle: settings.festTitle,
      settings,
      students,
      history
    };
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Arts_Fest_Data_Backup_${Date.now()}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Parse imported CSV file
  parseCSV(text) {
    const lines = text.split(/\r\n|\n/).filter(l => l.trim().length > 0);
    if (lines.length <= 1) return [];

    const result = [];
    const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, '').toLowerCase());

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const values = [];
      let inQuotes = false;
      let currentVal = '';

      for (let c = 0; c < line.length; c++) {
        const char = line[c];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(currentVal.trim().replace(/^["']|["']$/g, ''));
          currentVal = '';
        } else {
          currentVal += char;
        }
      }
      values.push(currentVal.trim().replace(/^["']|["']$/g, ''));

      if (values.length >= 2) {
        const name = values[headers.indexOf('name')] || values[2] || values[0] || `Student ${i}`;
        const rollNo = values[headers.indexOf('student id')] || values[headers.indexOf('roll number')] || values[headers.indexOf('rollno')] || values[headers.indexOf('id')] || values[1] || `STU-${100 + i}`;
        let rawSection = values[headers.indexOf('section')] || values[3] || "Sub Junior";
        
        // Normalize Section to 3 categories: Sub Junior, Junior, Senior
        let section = "Sub Junior";
        const lowSec = rawSection.toLowerCase();
        if (lowSec.includes('senior') && !lowSec.includes('secondary')) {
          section = "Senior";
        } else if (lowSec.includes('degree') || lowSec.includes('pg')) {
          section = "Senior";
        } else if (lowSec.includes('junior') && !lowSec.includes('sub')) {
          section = "Junior";
        } else if (lowSec.includes('senior secondary') || lowSec.includes('plus two') || lowSec.includes('higher') || lowSec.includes('ss')) {
          section = "Junior";
        } else {
          section = "Sub Junior";
        }

        const photo = values[headers.indexOf('photo')] || values[headers.indexOf('photo url')] || values[4] || "";

        result.push({
          id: `STU-CSV-${Date.now()}-${i}`,
          rollNo: rollNo,
          name: name,
          section: section,
          photo: photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0a5c36&color=fff&size=200`,
          status: "available",
          team: null,
          selectionOrder: null
        });
      }
    }
    return result;
  }
}

window.storageManager = new StorageManager();
