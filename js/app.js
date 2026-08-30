// Master Application Controller - Kanniyath Usthad Islamic Academy Arts Fest 2026
window.appSessionId = 'session_' + Math.random().toString(36).substring(2, 9);

class TeamSelectionApp {
  constructor() {
    this.students = [];
    this.settings = {};
    this.history = [];
    this.activeSectionFilter = 'all';
    this.searchQuery = '';
    this.isPresentationMode = false;
    this.isRevealing = false;

    this.dom = {};
  }

  init() {
    this.cacheDom();
    this.loadFromStorage(true);
    this.bindEvents();
    this.renderAll();
    this.initSupabase();
    console.log('Kanniyath Usthad Islamic Academy Arts Fest Portal Initialized. Session:', window.appSessionId);
  }

  cacheDom() {
    this.dom = {
      body: document.body,
      headerFestTitle: document.getElementById('header-fest-title'),
      headerFestSubtitle: document.getElementById('header-fest-subtitle'),
      liveTurnPill: document.getElementById('live-turn-pill'),
      turnTeamDisplay: document.getElementById('turn-team-display'),
      turnSubLabel: document.getElementById('turn-sub-label'),

      // Buttons
      btnHeaderUndo: document.getElementById('btn-header-undo'),
      btnToggleSound: document.getElementById('btn-toggle-sound'),
      soundIconSvg: document.getElementById('sound-icon-svg'),
      btnToggleConfetti: document.getElementById('btn-toggle-confetti'),
      confettiIconSvg: document.getElementById('confetti-icon-svg'),
      btnToggleHistory: document.getElementById('btn-toggle-history'),
      btnTogglePresentation: document.getElementById('btn-toggle-presentation'),
      btnOpenAdmin: document.getElementById('btn-open-admin'),

      // Team A Panel
      teamAContainer: document.getElementById('team-a-container'),
      teamATitle: document.getElementById('team-a-title'),
      teamATagline: document.getElementById('team-a-tagline'),
      teamAIcon: document.getElementById('team-a-icon'),
      teamACount: document.getElementById('team-a-count'),
      teamARoster: document.getElementById('team-a-roster'),
      tADnc: document.getElementById('t-a-dnc'),
      tAMus: document.getElementById('t-a-mus'),
      tAThr: document.getElementById('t-a-thr'),
      tAArt: document.getElementById('t-a-art'),
      tALit: document.getElementById('t-a-lit'),

      // Team B Panel
      teamBContainer: document.getElementById('team-b-container'),
      teamBTitle: document.getElementById('team-b-title'),
      teamBTagline: document.getElementById('team-b-tagline'),
      teamBIcon: document.getElementById('team-b-icon'),
      teamBCount: document.getElementById('team-b-count'),
      teamBRoster: document.getElementById('team-b-roster'),
      tBDnc: document.getElementById('t-b-dnc'),
      tBMus: document.getElementById('t-b-mus'),
      tBThr: document.getElementById('t-b-thr'),
      tBArt: document.getElementById('t-b-art'),
      tBLit: document.getElementById('t-b-lit'),

      // Center Stage
      studentSearchInput: document.getElementById('student-search-input'),
      availableCounterDisplay: document.getElementById('available-counter-display'),
      sectionFilterButtons: document.getElementById('section-filter-buttons'),
      studentGridContainer: document.getElementById('student-grid-container'),

      // Filter Counts
      countFilterAll: document.getElementById('count-filter-all'),
      countFilterDance: document.getElementById('count-filter-dance'),
      countFilterMusic: document.getElementById('count-filter-music'),
      countFilterTheater: document.getElementById('count-filter-theater'),
      countFilterFineArts: document.getElementById('count-filter-finearts'),
      countFilterLiterary: document.getElementById('count-filter-literary'),

      // Hero Reveal Modal
      heroRevealModal: document.getElementById('hero-reveal-modal'),
      heroCardInner: document.getElementById('hero-card-inner'),
      heroPillBadge: document.getElementById('hero-pill-badge'),
      heroStudentPhoto: document.getElementById('hero-student-photo'),
      heroStudentName: document.getElementById('hero-student-name'),
      heroStudentDetails: document.getElementById('hero-student-details'),
      heroTeamStamp: document.getElementById('hero-team-stamp'),

      // History Drawer
      historyDrawer: document.getElementById('history-drawer'),
      btnCloseHistory: document.getElementById('btn-close-history'),
      historyItemsList: document.getElementById('history-items-list'),

      // Admin Modal
      adminModal: document.getElementById('admin-modal'),
      btnCloseAdmin: document.getElementById('btn-close-admin'),
      modalTabBtns: document.querySelectorAll('.modal-tab-btn'),
      tabPanes: document.querySelectorAll('.tab-pane'),

      // Admin Forms & Actions
      adminSetTurnA: document.getElementById('admin-set-turn-a'),
      adminSetTurnB: document.getElementById('admin-set-turn-b'),
      adminCoinTossBtn: document.getElementById('admin-coin-toss-btn'),
      adminUndoBtn: document.getElementById('admin-undo-btn'),
      adminResetDraftBtn: document.getElementById('admin-reset-draft-btn'),
      adminStudentCount: document.getElementById('admin-student-count'),
      btnToggleAddStudent: document.getElementById('btn-toggle-add-student'),
      addStudentFormWrapper: document.getElementById('add-student-form-wrapper'),
      studentEditForm: document.getElementById('student-edit-form'),
      editStudentId: document.getElementById('edit-student-id'),
      formStudentName: document.getElementById('form-student-name'),
      formStudentRoll: document.getElementById('form-student-roll'),
      formStudentSection: document.getElementById('form-student-section'),
      formStudentTalent: document.getElementById('form-student-talent'),
      formStudentPhoto: document.getElementById('form-student-photo'),
      formPhotoFile: document.getElementById('form-photo-file'),
      btnCancelStudentForm: document.getElementById('btn-cancel-student-form'),
      adminStudentsTbody: document.getElementById('admin-students-tbody'),

      // Settings Form
      settingsForm: document.getElementById('settings-form'),
      setCollegeTitle: document.getElementById('set-college-title'),
      setFestSubtitle: document.getElementById('set-fest-subtitle'),
      setTeamAName: document.getElementById('set-team-a-name'),
      setTeamAIcon: document.getElementById('set-team-a-icon'),
      setTeamATagline: document.getElementById('set-team-a-tagline'),
      setTeamBName: document.getElementById('set-team-b-name'),
      setTeamBIcon: document.getElementById('set-team-b-icon'),
      setTeamBTagline: document.getElementById('set-team-b-tagline'),

      // Data Tab
      btnExportCsv: document.getElementById('btn-export-csv'),
      btnExportJson: document.getElementById('btn-export-json'),
      btnImportCsvFile: document.getElementById('btn-import-csv-file'),
      btnRestoreSampleData: document.getElementById('btn-restore-sample-data'),
      btnSupabaseRefresh: document.getElementById('btn-supabase-refresh')
    };
  }

  loadFromStorage(initial = false) {
    this.students = window.storageManager.getStudents();
    this.settings = window.storageManager.getSettings();
    this.history = window.storageManager.getHistory();

    // Ensure Academy branding defaults if missing
    if (!this.settings.collegeName) {
      this.settings.collegeName = DEFAULT_SETTINGS.collegeName;
      this.settings.festSubtitle = DEFAULT_SETTINGS.festSubtitle;
      this.settings.teamA = DEFAULT_SETTINGS.teamA;
      this.settings.teamB = DEFAULT_SETTINGS.teamB;
      window.storageManager.saveSettings(this.settings, false);
    }

    if (initial) {
      window.soundEngine.enabled = this.settings.soundEnabled ?? true;
      window.confettiEngine.enabled = this.settings.confettiEnabled ?? true;
    }
  }

  initSupabase() {
    if (window.supabaseService && window.supabaseService.isConnected) {
      // 1. Subscribe to Live Realtime updates across devices
      window.supabaseService.subscribeToRealtime({
        onStudentChange: (payload) => this.handleSupabaseStudentChange(payload),
        onStateChange: (payload) => this.handleSupabaseStateChange(payload)
      });

      // 2. Fetch latest data from Supabase
      this.syncWithSupabase(false);
    }
  }

  async syncWithSupabase(showToast = false) {
    if (!window.supabaseService || !window.supabaseService.isConnected) return;
    try {
      const cloudStudents = await window.supabaseService.fetchStudents();
      const cloudState = await window.supabaseService.fetchPortalState();

      if (cloudStudents && cloudStudents.length > 0) {
        this.students = cloudStudents;
        window.storageManager.saveStudents(this.students, false);
      }

      if (cloudState && cloudState.current_turn) {
        const turnKey = cloudState.current_turn === 'A' ? 'team-a' : 'team-b';
        this.settings.currentTurn = turnKey;
        window.storageManager.saveSettings(this.settings, false);
      }

      this.renderAll();
      if (showToast) {
        alert('Rosters successfully synchronized with Cloud Database.');
      }
    } catch (err) {
      console.warn('Supabase sync error:', err);
    }
  }

  handleSupabaseStudentChange(payload) {
    if (!payload || !payload.new) return;
    const updated = payload.new;
    const student = this.students.find(s => s.id === updated.id);
    if (student) {
      student.status = updated.selected_by ? 'selected' : 'available';
      student.team = updated.selected_by ? (updated.selected_by === 'A' ? 'team-a' : 'team-b') : null;
      student.selectedAt = updated.selected_at;
      student.selectionOrder = updated.selection_order;
      window.storageManager.saveStudents(this.students, false);
      this.renderAll();
    }
  }

  handleSupabaseStateChange(payload) {
    if (!payload || !payload.new) return;
    const state = payload.new;
    if (state.current_turn) {
      this.settings.currentTurn = state.current_turn === 'A' ? 'team-a' : 'team-b';
      window.storageManager.saveSettings(this.settings, false);
      this.renderTurnIndicator();
    }
  }

  bindEvents() {
    // Search input
    this.dom.studentSearchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderStudentGrid();
    });

    // Section filter buttons
    this.dom.sectionFilterButtons.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      this.dom.sectionFilterButtons.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.activeSectionFilter = btn.dataset.section;
      window.soundEngine.playClick();
      this.renderStudentGrid();
    });

    // Header Actions
    this.dom.btnHeaderUndo.addEventListener('click', () => this.undoLastSelection());
    this.dom.btnToggleSound.addEventListener('click', () => this.toggleSound());
    this.dom.btnToggleConfetti.addEventListener('click', () => this.toggleConfetti());
    this.dom.btnToggleHistory.addEventListener('click', () => this.toggleHistoryDrawer());
    this.dom.btnCloseHistory.addEventListener('click', () => this.toggleHistoryDrawer(false));
    this.dom.btnTogglePresentation.addEventListener('click', () => this.togglePresentationMode());
    this.dom.btnOpenAdmin.addEventListener('click', () => this.openAdminModal());
    this.dom.btnCloseAdmin.addEventListener('click', () => this.closeAdminModal());

    // Live Turn Pill Click (Quick Toggle)
    this.dom.liveTurnPill.addEventListener('click', () => {
      this.switchTurn();
    });

    // Admin Tabs
    this.dom.modalTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.modalTabBtns.forEach(b => b.classList.remove('active'));
        this.dom.tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        window.soundEngine.playClick();
      });
    });

    // Admin Draft Controls
    this.dom.adminSetTurnA.addEventListener('click', () => this.setTurn('team-a'));
    this.dom.adminSetTurnB.addEventListener('click', () => this.setTurn('team-b'));
    this.dom.adminCoinTossBtn.addEventListener('click', () => this.performCoinToss());
    this.dom.adminUndoBtn.addEventListener('click', () => this.undoLastSelection());
    this.dom.adminResetDraftBtn.addEventListener('click', () => this.confirmResetDraft());

    // Admin Student Form
    this.dom.btnToggleAddStudent.addEventListener('click', () => {
      this.openStudentForm();
    });
    this.dom.btnCancelStudentForm.addEventListener('click', () => {
      this.closeStudentForm();
    });
    this.dom.formPhotoFile.addEventListener('change', (e) => this.handlePhotoFileUpload(e));
    this.dom.studentEditForm.addEventListener('submit', (e) => this.handleSaveStudentForm(e));

    // Settings Form
    this.dom.settingsForm.addEventListener('submit', (e) => this.handleSaveSettings(e));

    // Data Export & Import
    this.dom.btnExportCsv.addEventListener('click', () => {
      window.storageManager.exportToCSV(this.students, this.settings);
    });
    this.dom.btnExportJson.addEventListener('click', () => {
      window.storageManager.exportBackupJSON(this.students, this.settings, this.history);
    });
    this.dom.btnImportCsvFile.addEventListener('change', (e) => this.handleImportCsv(e));
    this.dom.btnRestoreSampleData.addEventListener('click', () => this.confirmRestoreSampleData());
    if (this.dom.btnSupabaseRefresh) {
      this.dom.btnSupabaseRefresh.addEventListener('click', () => this.syncWithSupabase(true));
    }

    // Dismiss Hero Reveal Modal on Click
    this.dom.heroRevealModal.addEventListener('click', () => {
      this.dismissHeroReveal();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.dismissHeroReveal();
        this.closeAdminModal();
        this.toggleHistoryDrawer(false);
      } else if (e.key.toLowerCase() === 'f' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        this.togglePresentationMode();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        this.undoLastSelection();
      }
    });
  }

  // ==========================================================================
  // Core Selection Flow
  // ==========================================================================
  selectStudent(studentId) {
    if (this.isRevealing) return;

    const student = this.students.find(s => s.id === studentId);
    if (!student || student.status === 'selected') return;

    const currentTurn = this.settings.currentTurn || 'team-a';
    const teamConfig = currentTurn === 'team-a' ? this.settings.teamA : this.settings.teamB;

    // Update Student Record
    student.status = 'selected';
    student.team = currentTurn;
    student.selectionOrder = this.history.length + 1;
    student.selectedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Record History
    const historyItem = {
      studentId: student.id,
      studentName: student.name,
      rollNo: student.rollNo,
      section: student.section,
      subCategory: student.subCategory,
      photo: student.photo,
      team: currentTurn,
      teamName: teamConfig.name,
      selectionOrder: student.selectionOrder,
      timestamp: student.selectedAt
    };
    this.history.unshift(historyItem);

    // Save locally
    window.storageManager.saveStudents(this.students);
    window.storageManager.saveHistory(this.history);

    // Trigger Sound & Confetti
    window.soundEngine.playSelectionSound(currentTurn);
    window.confettiEngine.fire(teamConfig.color || (currentTurn === 'team-a' ? '#0a5c36' : '#c59b27'));

    // Show Hero Stage Reveal
    this.showHeroReveal(student, teamConfig, currentTurn);

    // Switch Turn automatically
    const nextTurn = currentTurn === 'team-a' ? 'team-b' : 'team-a';
    this.settings.currentTurn = nextTurn;
    window.storageManager.saveSettings(this.settings);

    // Supabase Cloud Sync
    if (window.supabaseService) {
      window.supabaseService.selectStudent(student.id, currentTurn === 'team-a' ? 'A' : 'B', student.selectionOrder);
      window.supabaseService.updatePortalState(nextTurn);
      window.supabaseService.recordHistory(student.id, student.name, currentTurn, 'SELECT');
    }

    // Update UI
    this.renderAll();
  }

  showHeroReveal(student, teamConfig, teamType) {
    this.isRevealing = true;
    const fallbackPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0a5c36&color=fff&size=300`;

    this.dom.heroStudentPhoto.src = student.photo || fallbackPhoto;
    this.dom.heroStudentName.textContent = student.name;
    this.dom.heroStudentDetails.textContent = `${student.section} • ${student.subCategory || student.rollNo}`;

    this.dom.heroCardInner.className = `hero-reveal-card ${teamType === 'team-a' ? 'team-a-reveal' : 'team-b-reveal'}`;
    this.dom.heroPillBadge.textContent = `OFFICIAL DRAFT SELECTION #${student.selectionOrder}`;
    this.dom.heroTeamStamp.textContent = `SELECTED BY ${teamConfig.name.toUpperCase()}`;

    this.dom.heroRevealModal.classList.add('active');

    // Auto-dismiss
    clearTimeout(this.revealTimeout);
    const duration = this.settings.revealDurationMs || 2200;
    this.revealTimeout = setTimeout(() => {
      this.dismissHeroReveal();
    }, duration);
  }

  dismissHeroReveal() {
    if (!this.isRevealing) return;
    this.isRevealing = false;
    clearTimeout(this.revealTimeout);
    this.dom.heroRevealModal.classList.remove('active');
  }

  switchTurn() {
    const nextTurn = this.settings.currentTurn === 'team-a' ? 'team-b' : 'team-a';
    this.setTurn(nextTurn);
  }

  setTurn(turn) {
    this.settings.currentTurn = turn;
    window.storageManager.saveSettings(this.settings);
    if (window.supabaseService) {
      window.supabaseService.updatePortalState(turn);
    }
    window.soundEngine.playTurnSwitch();
    this.renderTurnIndicator();
  }

  undoLastSelection() {
    if (this.history.length === 0) return;

    const lastAction = this.history.shift();
    const student = this.students.find(s => s.id === lastAction.studentId);

    if (student) {
      student.status = 'available';
      student.team = null;
      student.selectionOrder = null;
      student.selectedAt = null;
    }

    this.settings.currentTurn = lastAction.team;

    window.storageManager.saveStudents(this.students);
    window.storageManager.saveHistory(this.history);
    window.storageManager.saveSettings(this.settings);

    // Supabase Cloud Sync
    if (window.supabaseService && student) {
      window.supabaseService.undoStudentSelection(student.id);
      window.supabaseService.updatePortalState(lastAction.team);
      window.supabaseService.recordHistory(student.id, student.name, lastAction.team, 'UNDO');
    }

    window.soundEngine.playUndo();
    this.renderAll();
  }

  performCoinToss() {
    window.soundEngine.playCoinFlip();
    const winner = Math.random() > 0.5 ? 'team-a' : 'team-b';
    const teamName = winner === 'team-a' ? this.settings.teamA.name : this.settings.teamB.name;
    const teamColor = winner === 'team-a' ? this.settings.teamA.color : this.settings.teamB.color;

    setTimeout(() => {
      this.setTurn(winner);
      window.confettiEngine.fire(teamColor);
      alert(`Coin Toss Result:\n\n${teamName} won the toss and has the active first pick.`);
    }, 600);
  }

  confirmResetDraft() {
    const confirm = window.confirm('Are you sure you want to RESET all team selections?\n\nAll students will be returned to the available pool.');
    if (!confirm) return;

    this.students.forEach(s => {
      s.status = 'available';
      s.team = null;
      s.selectionOrder = null;
      s.selectedAt = null;
    });

    this.history = [];
    this.settings.currentTurn = 'team-a';

    window.storageManager.saveStudents(this.students);
    window.storageManager.saveHistory(this.history);
    window.storageManager.saveSettings(this.settings);

    // Supabase Cloud Sync
    if (window.supabaseService) {
      window.supabaseService.resetAllStudents();
    }

    window.soundEngine.playUndo();
    this.renderAll();
    this.closeAdminModal();
  }

  // ==========================================================================
  // Renderers
  // ==========================================================================
  renderAll() {
    this.renderSettings();
    this.renderTurnIndicator();
    this.renderStudentGrid();
    this.renderRosters();
    this.renderHistory();
    this.renderAdminStudentTable();
  }

  renderSettings() {
    this.dom.headerFestTitle.textContent = this.settings.collegeName || 'KANNIYATH USTHAD ISLAMIC ACADEMY';
    this.dom.headerFestSubtitle.textContent = this.settings.festSubtitle || 'ARTS FEST 2026 — OFFICIAL TEAM SELECTION PORTAL';

    // Team A
    this.dom.teamATitle.textContent = this.settings.teamA.name;
    this.dom.teamATagline.textContent = this.settings.teamA.tagline || 'Dark Green Squad';
    this.dom.teamAIcon.textContent = this.settings.teamA.icon || 'A';

    // Team B
    this.dom.teamBTitle.textContent = this.settings.teamB.name;
    this.dom.teamBTagline.textContent = this.settings.teamB.tagline || 'Gold Amber Squad';
    this.dom.teamBIcon.textContent = this.settings.teamB.icon || 'B';

    // Admin Inputs
    if (this.dom.setCollegeTitle) this.dom.setCollegeTitle.value = this.settings.collegeName || 'KANNIYATH USTHAD ISLAMIC ACADEMY';
    if (this.dom.setFestSubtitle) this.dom.setFestSubtitle.value = this.settings.festSubtitle || 'ARTS FEST 2026 — OFFICIAL TEAM SELECTION PORTAL';
    if (this.dom.setTeamAName) this.dom.setTeamAName.value = this.settings.teamA.name;
    if (this.dom.setTeamAIcon) this.dom.setTeamAIcon.value = this.settings.teamA.icon || 'A';
    if (this.dom.setTeamATagline) this.dom.setTeamATagline.value = this.settings.teamA.tagline || 'Dark Green Squad';
    if (this.dom.setTeamBName) this.dom.setTeamBName.value = this.settings.teamB.name;
    if (this.dom.setTeamBIcon) this.dom.setTeamBIcon.value = this.settings.teamB.icon || 'B';
    if (this.dom.setTeamBTagline) this.dom.setTeamBTagline.value = this.settings.teamB.tagline || 'Gold Amber Squad';
  }

  renderTurnIndicator() {
    const isTeamA = this.settings.currentTurn === 'team-a';
    const activeTeam = isTeamA ? this.settings.teamA : this.settings.teamB;

    this.dom.body.classList.toggle('turn-a-active', isTeamA);
    this.dom.body.classList.toggle('turn-b-active', !isTeamA);

    this.dom.liveTurnPill.classList.toggle('team-a-active', isTeamA);
    this.dom.liveTurnPill.classList.toggle('team-b-active', !isTeamA);

    this.dom.turnTeamDisplay.textContent = activeTeam.name.toUpperCase();
    this.dom.turnSubLabel.textContent = `ACTIVE TURN (${activeTeam.shortCode})`;

    this.dom.btnHeaderUndo.disabled = this.history.length === 0;
    this.dom.adminUndoBtn.disabled = this.history.length === 0;
  }

  renderStudentGrid() {
    const query = this.searchQuery;
    const sectionFilter = this.activeSectionFilter;

    const filtered = this.students.filter(student => {
      const matchSection = sectionFilter === 'all' || student.section === sectionFilter;
      const matchQuery = !query || 
        student.name.toLowerCase().includes(query) ||
        student.rollNo.toLowerCase().includes(query) ||
        (student.subCategory && student.subCategory.toLowerCase().includes(query)) ||
        student.section.toLowerCase().includes(query);

      return matchSection && matchQuery;
    });

    // Counts
    const availableCount = this.students.filter(s => s.status === 'available').length;
    this.dom.availableCounterDisplay.textContent = `${availableCount} AVAILABLE`;

    this.dom.countFilterAll.textContent = this.students.filter(s => s.status === 'available').length;
    this.dom.countFilterDance.textContent = this.students.filter(s => s.section === 'Cultural & Stage' && s.status === 'available').length;
    this.dom.countFilterMusic.textContent = this.students.filter(s => s.section === 'Music & Vocals' && s.status === 'available').length;
    this.dom.countFilterTheater.textContent = this.students.filter(s => s.section === 'Theater & Drama' && s.status === 'available').length;
    this.dom.countFilterFineArts.textContent = this.students.filter(s => s.section === 'Fine Arts & Design' && s.status === 'available').length;
    this.dom.countFilterLiterary.textContent = this.students.filter(s => s.section === 'Literary & Oratory' && s.status === 'available').length;

    if (filtered.length === 0) {
      this.dom.studentGridContainer.innerHTML = `
        <div class="roster-empty-state" style="grid-column: 1 / -1; padding: 4rem 1rem;">
          <svg class="empty-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p>No students match the current criteria</p>
          <small>Try clearing your search query or choosing another section</small>
        </div>
      `;
      return;
    }

    this.dom.studentGridContainer.innerHTML = filtered.map(s => this.createStudentCardHtml(s)).join('');

    this.dom.studentGridContainer.querySelectorAll('.student-card:not(.selected)').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.studentId;
        this.selectStudent(id);
      });
    });
  }

  createStudentCardHtml(student) {
    const isSelected = student.status === 'selected';
    const fallbackPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0a5c36&color=fff&size=200`;
    const selectedClass = isSelected ? `selected ${student.team === 'team-a' ? 'selected-team-a' : 'selected-team-b'}` : '';

    let bannerHtml = '';
    if (isSelected) {
      const teamLabel = student.team === 'team-a' ? this.settings.teamA.name : this.settings.teamB.name;
      bannerHtml = `<div class="card-selected-banner">${teamLabel} • #${student.selectionOrder || '-'}</div>`;
    }

    const currentTurnTeamName = this.settings.currentTurn === 'team-a' ? this.settings.teamA.name : this.settings.teamB.name;

    return `
      <div class="student-card ${selectedClass}" data-student-id="${student.id}" title="${isSelected ? 'Drafted to ' + (student.team === 'team-a' ? this.settings.teamA.name : this.settings.teamB.name) : 'Draft for ' + currentTurnTeamName}">
        ${bannerHtml}
        <div class="card-photo-wrapper">
          <img src="${student.photo || fallbackPhoto}" alt="${student.name}" class="student-card-photo" loading="lazy" onerror="this.src='${fallbackPhoto}'">
          <span class="card-roll-tag">${student.rollNo}</span>
          <span class="card-section-tag">${student.section}</span>
        </div>
        <div class="card-body">
          <h3 class="card-student-name">${student.name}</h3>
          <p class="card-student-talent">${student.subCategory || student.section}</p>
          <div class="card-action-footer">
            <button class="btn-select-student" tabindex="-1">
              ${isSelected ? 'Drafted' : 'Draft for ' + (this.settings.currentTurn === 'team-a' ? 'Team A' : 'Team B')}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderRosters() {
    const teamAStudents = this.students.filter(s => s.team === 'team-a').sort((a, b) => (a.selectionOrder || 0) - (b.selectionOrder || 0));
    const teamBStudents = this.students.filter(s => s.team === 'team-b').sort((a, b) => (a.selectionOrder || 0) - (b.selectionOrder || 0));

    this.dom.teamACount.textContent = teamAStudents.length;
    this.dom.teamBCount.textContent = teamBStudents.length;

    // Team A Stats
    this.dom.tADnc.textContent = teamAStudents.filter(s => s.section === 'Cultural & Stage').length;
    this.dom.tAMus.textContent = teamAStudents.filter(s => s.section === 'Music & Vocals').length;
    this.dom.tAThr.textContent = teamAStudents.filter(s => s.section === 'Theater & Drama').length;
    this.dom.tAArt.textContent = teamAStudents.filter(s => s.section === 'Fine Arts & Design').length;
    this.dom.tALit.textContent = teamAStudents.filter(s => s.section === 'Literary & Oratory').length;

    // Team B Stats
    this.dom.tBDnc.textContent = teamBStudents.filter(s => s.section === 'Cultural & Stage').length;
    this.dom.tBMus.textContent = teamBStudents.filter(s => s.section === 'Music & Vocals').length;
    this.dom.tBThr.textContent = teamBStudents.filter(s => s.section === 'Theater & Drama').length;
    this.dom.tBArt.textContent = teamBStudents.filter(s => s.section === 'Fine Arts & Design').length;
    this.dom.tBLit.textContent = teamBStudents.filter(s => s.section === 'Literary & Oratory').length;

    // Render Lists
    if (teamAStudents.length === 0) {
      this.dom.teamARoster.innerHTML = `
        <div class="roster-empty-state">
          <svg class="empty-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
          <p>No students drafted yet</p>
          <small>Selected members will appear in this roster</small>
        </div>
      `;
    } else {
      this.dom.teamARoster.innerHTML = teamAStudents.map(s => this.createRosterCardHtml(s)).join('');
    }

    if (teamBStudents.length === 0) {
      this.dom.teamBRoster.innerHTML = `
        <div class="roster-empty-state">
          <svg class="empty-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
          <p>No students drafted yet</p>
          <small>Selected members will appear in this roster</small>
        </div>
      `;
    } else {
      this.dom.teamBRoster.innerHTML = teamBStudents.map(s => this.createRosterCardHtml(s)).join('');
    }
  }

  createRosterCardHtml(student) {
    const fallbackPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0a5c36&color=fff&size=100`;
    return `
      <div class="roster-card">
        <img src="${student.photo || fallbackPhoto}" alt="${student.name}" class="roster-photo-thumb" onerror="this.src='${fallbackPhoto}'">
        <div class="roster-info">
          <div class="roster-name-row">
            <h4 class="roster-student-name">${student.name}</h4>
            <span class="roster-order-badge">#${student.selectionOrder || '-'}</span>
          </div>
          <div class="roster-meta-row">
            <span class="roster-roll-pill">${student.rollNo}</span>
            <span class="roster-section-tag">${student.section}</span>
          </div>
        </div>
      </div>
    `;
  }

  renderHistory() {
    if (this.history.length === 0) {
      this.dom.historyItemsList.innerHTML = `
        <div class="roster-empty-state">
          <svg class="empty-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p>No selection activity yet</p>
          <small>Turn-by-turn log will appear here</small>
        </div>
      `;
      return;
    }

    this.dom.historyItemsList.innerHTML = this.history.map(item => {
      const isTeamA = item.team === 'team-a';
      return `
        <div class="history-item-row">
          <span class="history-item-dot ${isTeamA ? 'dot-team-a' : 'dot-team-b'}"></span>
          <div class="history-item-content">
            <div class="history-item-meta">
              <span class="history-team-label ${isTeamA ? 'team-a-text' : 'team-b-text'}">${item.teamName}</span>
              <span class="history-time-stamp">${item.timestamp}</span>
            </div>
            <div class="history-student-title">${item.studentName}</div>
            <div class="history-student-sub">${item.section} • #${item.selectionOrder}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderAdminStudentTable() {
    this.dom.adminStudentCount.textContent = this.students.length;
    this.dom.adminStudentsTbody.innerHTML = this.students.map(s => {
      const fallbackPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=0a5c36&color=fff&size=60`;
      let statusHtml = `<span style="color:var(--brand-green); font-weight:600">Available</span>`;
      if (s.status === 'selected') {
        const teamName = s.team === 'team-a' ? this.settings.teamA.name : this.settings.teamB.name;
        const color = s.team === 'team-a' ? 'var(--brand-green)' : 'var(--brand-gold-dark)';
        statusHtml = `<span style="color:${color}; font-weight:700">${teamName} (#${s.selectionOrder})</span>`;
      }

      return `
        <tr>
          <td><img src="${s.photo || fallbackPhoto}" class="admin-table-thumb" onerror="this.src='${fallbackPhoto}'"></td>
          <td style="font-weight:700; color:var(--brand-green)">${s.rollNo}</td>
          <td style="font-weight:600">${s.name}</td>
          <td>${s.section}</td>
          <td style="color:var(--text-muted)">${s.subCategory || '-'}</td>
          <td>${statusHtml}</td>
          <td>
            <button class="btn-table-action btn-table-edit" onclick="window.app.editStudent('${s.id}')">Edit</button>
            <button class="btn-table-action btn-table-delete" onclick="window.app.deleteStudent('${s.id}')">Delete</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // ==========================================================================
  // Admin Operations
  // ==========================================================================
  openStudentForm(student = null) {
    this.dom.addStudentFormWrapper.style.display = 'block';
    if (student) {
      document.getElementById('student-form-title').textContent = 'Edit Student Profile';
      this.dom.editStudentId.value = student.id;
      this.dom.formStudentName.value = student.name;
      this.dom.formStudentRoll.value = student.rollNo;
      this.dom.formStudentSection.value = student.section;
      this.dom.formStudentTalent.value = student.subCategory || '';
      this.dom.formStudentPhoto.value = student.photo || '';
    } else {
      document.getElementById('student-form-title').textContent = 'Register Student';
      this.dom.studentEditForm.reset();
      this.dom.editStudentId.value = '';
    }
  }

  closeStudentForm() {
    this.dom.addStudentFormWrapper.style.display = 'none';
    this.dom.studentEditForm.reset();
    this.dom.editStudentId.value = '';
  }

  editStudent(id) {
    const student = this.students.find(s => s.id === id);
    if (student) {
      this.openStudentForm(student);
    }
  }

  deleteStudent(id) {
    const student = this.students.find(s => s.id === id);
    if (!student) return;

    if (confirm(`Are you sure you want to delete ${student.name} (${student.rollNo})?`)) {
      this.students = this.students.filter(s => s.id !== id);
      this.history = this.history.filter(h => h.studentId !== id);
      window.storageManager.saveStudents(this.students);
      window.storageManager.saveHistory(this.history);
      this.renderAll();
    }
  }

  handlePhotoFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      this.dom.formStudentPhoto.value = uploadEvent.target.result;
    };
    reader.readAsDataURL(file);
  }

  handleSaveStudentForm(e) {
    e.preventDefault();
    const editId = this.dom.editStudentId.value;
    const name = this.dom.formStudentName.value.trim();
    const rollNo = this.dom.formStudentRoll.value.trim();
    const section = this.dom.formStudentSection.value;
    const subCategory = this.dom.formStudentTalent.value.trim();
    const photo = this.dom.formStudentPhoto.value.trim() || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0a5c36&color=fff&size=200`;

    if (editId) {
      const student = this.students.find(s => s.id === editId);
      if (student) {
        student.name = name;
        student.rollNo = rollNo;
        student.section = section;
        student.subCategory = subCategory;
        student.photo = photo;
      }
    } else {
      const newStudent = {
        id: `STU-MANUAL-${Date.now()}`,
        rollNo: rollNo,
        name: name,
        section: section,
        subCategory: subCategory,
        photo: photo,
        status: 'available',
        team: null,
        selectionOrder: null
      };
      this.students.push(newStudent);
    }

    window.storageManager.saveStudents(this.students);
    this.closeStudentForm();
    this.renderAll();
    window.soundEngine.playClick();
  }

  handleSaveSettings(e) {
    e.preventDefault();
    this.settings.collegeName = this.dom.setCollegeTitle.value.trim() || 'KANNIYATH USTHAD ISLAMIC ACADEMY';
    this.settings.festSubtitle = this.dom.setFestSubtitle.value.trim() || 'ARTS FEST 2026 — OFFICIAL TEAM SELECTION PORTAL';

    this.settings.teamA.name = this.dom.setTeamAName.value.trim() || 'TEAM A';
    this.settings.teamB.name = this.dom.setTeamBName.value.trim() || 'TEAM B';

    window.storageManager.saveSettings(this.settings);
    this.renderAll();
    this.closeAdminModal();
    alert('Portal settings successfully updated.');
  }

  handleImportCsv(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (fileEvent) => {
      const text = fileEvent.target.result;
      const importedStudents = window.storageManager.parseCSV(text);
      if (importedStudents.length > 0) {
        if (confirm(`Successfully parsed ${importedStudents.length} students from CSV.\n\nDo you want to replace the current student list with this imported dataset?`)) {
          this.students = importedStudents;
          this.history = [];
          window.storageManager.saveStudents(this.students);
          window.storageManager.saveHistory(this.history);
          this.renderAll();
          alert(`Import complete! Loaded ${importedStudents.length} students.`);
        }
      } else {
        alert('Could not parse any valid student records from the provided file. Please check the CSV format.');
      }
    };
    reader.readAsText(file);
  }

  confirmRestoreSampleData() {
    if (confirm('Restore the default 75 sample students dataset across all sections? Current changes will be overwritten.')) {
      window.storageManager.resetAllToDefault();
      this.loadFromStorage(true);
      this.renderAll();
      alert('Sample dataset with 75 students successfully restored.');
    }
  }

  // ==========================================================================
  // View Toggles
  // ==========================================================================
  toggleSound() {
    this.settings.soundEnabled = !this.settings.soundEnabled;
    window.soundEngine.enabled = this.settings.soundEnabled;
    this.dom.btnToggleSound.classList.toggle('active', this.settings.soundEnabled);
    if (this.dom.soundIconSvg) {
      if (this.settings.soundEnabled) {
        this.dom.soundIconSvg.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        `;
      } else {
        this.dom.soundIconSvg.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        `;
      }
    }
    window.storageManager.saveSettings(this.settings, false);
  }

  toggleConfetti() {
    this.settings.confettiEnabled = !this.settings.confettiEnabled;
    window.confettiEngine.enabled = this.settings.confettiEnabled;
    this.dom.btnToggleConfetti.classList.toggle('active', this.settings.confettiEnabled);
    window.storageManager.saveSettings(this.settings, false);
  }

  toggleHistoryDrawer(forceState = null) {
    if (forceState !== null) {
      this.dom.historyDrawer.classList.toggle('open', forceState);
    } else {
      this.dom.historyDrawer.classList.toggle('open');
    }
    window.soundEngine.playClick();
  }

  togglePresentationMode() {
    this.isPresentationMode = !this.isPresentationMode;
    this.dom.body.classList.toggle('presentation-mode', this.isPresentationMode);
    this.dom.btnTogglePresentation.classList.toggle('active', this.isPresentationMode);

    if (this.isPresentationMode) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
    window.soundEngine.playClick();
  }

  openAdminModal() {
    this.dom.adminModal.classList.add('active');
    window.soundEngine.playClick();
  }

  closeAdminModal() {
    this.dom.adminModal.classList.remove('active');
    this.closeStudentForm();
  }

  handleRemoteSync(data) {
    if (data.sourceId === window.appSessionId) return;
    this.loadFromStorage(false);
    this.renderAll();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new TeamSelectionApp();
  window.app.init();
});
