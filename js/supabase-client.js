// ==============================================================================
// Supabase Cloud Database Client & Realtime Synchronization
// Kanniyath Usthad Islamic Academy - Arts Fest Team Selection Portal
// ==============================================================================

const SUPABASE_CONFIG = {
  url: "https://tuejpbygjfxczwpxiadm.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1ZWpwYnlnamZ4Y3p3cHhpYWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxMDExMTQsImV4cCI6MjEwMzY3NzExNH0.ujA9eNHko_TgNhX18ndCU9SajjFG-OGJm3n0UUrWHes"
};

class SupabaseService {
  constructor() {
    this.client = null;
    this.isConnected = false;
    this.realtimeChannel = null;
    this.init();
  }

  init() {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        this.client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        this.isConnected = true;
        console.log('✅ Supabase Client initialized successfully.');
      } catch (err) {
        console.error('Failed to initialize Supabase client:', err);
        this.isConnected = false;
      }
    } else {
      console.warn('Supabase SDK not loaded yet. Retrying on load...');
    }
  }

  // Fetch all students from Supabase
  async fetchStudents() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('students')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Supabase fetchStudents error:', error);
        return null;
      }

      // Map database schema to frontend student model
      return data.map(s => ({
        id: s.id,
        rollNo: s.roll,
        name: s.name,
        section: s.section,
        photo: s.photo,
        status: s.selected_by ? 'selected' : 'available',
        team: s.selected_by ? (s.selected_by === 'A' ? 'team-a' : 'team-b') : null,
        selectedBy: s.selected_by,
        selectedAt: s.selected_at,
        selectionOrder: s.selection_order
      }));
    } catch (err) {
      console.error('Supabase fetchStudents exception:', err);
      return null;
    }
  }

  // Fetch portal state (current turn, coin toss, etc.)
  async fetchPortalState() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('portal_state')
        .select('*')
        .eq('id', 'current_state')
        .single();

      if (error) {
        console.error('Supabase fetchPortalState error:', error);
        return null;
      }
      return data;
    } catch (err) {
      console.error('Supabase fetchPortalState exception:', err);
      return null;
    }
  }

  // Insert or Update student profile in Supabase
  async saveStudent(student) {
    if (!this.client) return false;
    try {
      const payload = {
        id: student.id,
        name: student.name,
        roll: student.rollNo,
        section: student.section,
        photo: student.photo || null,
        selected_by: student.selectedBy || (student.team ? (student.team === 'team-a' ? 'A' : 'B') : null),
        selected_at: student.selectedAt || null,
        selection_order: student.selectionOrder || null,
        updated_at: new Date().toISOString()
      };

      const { error } = await this.client
        .from('students')
        .upsert(payload, { onConflict: 'id' });

      if (error) {
        console.error('Supabase saveStudent error:', error);
        return false;
      }
      console.log('✅ Student saved to Supabase:', student.name);
      return true;
    } catch (err) {
      console.error('Supabase saveStudent exception:', err);
      return false;
    }
  }

  // Delete student from Supabase
  async deleteStudent(studentId) {
    if (!this.client) return false;
    try {
      const { error } = await this.client
        .from('students')
        .delete()
        .eq('id', studentId);

      if (error) {
        console.error('Supabase deleteStudent error:', error);
        return false;
      }
      console.log('✅ Student deleted from Supabase:', studentId);
      return true;
    } catch (err) {
      console.error('Supabase deleteStudent exception:', err);
      return false;
    }
  }

  // Batch insert / upsert students
  async batchUpsertStudents(studentsList) {
    if (!this.client || !studentsList || studentsList.length === 0) return false;
    try {
      const payload = studentsList.map(s => ({
        id: s.id,
        name: s.name,
        roll: s.rollNo,
        section: s.section,
        photo: s.photo || null,
        selected_by: s.selectedBy || (s.team ? (s.team === 'team-a' ? 'A' : 'B') : null),
        selected_at: s.selectedAt || null,
        selection_order: s.selectionOrder || null,
        updated_at: new Date().toISOString()
      }));

      const { error } = await this.client
        .from('students')
        .upsert(payload, { onConflict: 'id' });

      if (error) {
        console.error('Supabase batchUpsertStudents error:', error);
        return false;
      }
      return true;
    } catch (err) {
      console.error('Supabase batchUpsertStudents exception:', err);
      return false;
    }
  }

  // Update a student selection in Supabase
  async selectStudent(studentId, teamShortCode, selectionOrder) {
    if (!this.client) return false;
    try {
      const { error } = await this.client
        .from('students')
        .update({
          selected_by: teamShortCode,
          selected_at: new Date().toISOString(),
          selection_order: selectionOrder,
          updated_at: new Date().toISOString()
        })
        .eq('id', studentId);

      if (error) {
        console.error('Supabase selectStudent error:', error);
        return false;
      }
      return true;
    } catch (err) {
      console.error('Supabase selectStudent exception:', err);
      return false;
    }
  }

  // Undo student selection in Supabase
  async undoStudentSelection(studentId) {
    if (!this.client) return false;
    try {
      const { error } = await this.client
        .from('students')
        .update({
          selected_by: null,
          selected_at: null,
          selection_order: null,
          updated_at: new Date().toISOString()
        })
        .eq('id', studentId);

      if (error) {
        console.error('Supabase undoStudentSelection error:', error);
        return false;
      }
      return true;
    } catch (err) {
      console.error('Supabase undoStudentSelection exception:', err);
      return false;
    }
  }

  // Update current turn & portal state
  async updatePortalState(currentTurn, coinTossWinner = null) {
    if (!this.client) return false;
    try {
      const payload = {
        current_turn: currentTurn === 'team-a' ? 'A' : (currentTurn === 'team-b' ? 'B' : currentTurn),
        updated_at: new Date().toISOString()
      };
      if (coinTossWinner) payload.coin_toss_winner = coinTossWinner;

      const { error } = await this.client
        .from('portal_state')
        .upsert({ id: 'current_state', ...payload });

      if (error) {
        console.error('Supabase updatePortalState error:', error);
        return false;
      }
      return true;
    } catch (err) {
      console.error('Supabase updatePortalState exception:', err);
      return false;
    }
  }

  // Record history event in Supabase
  async recordHistory(studentId, studentName, team, action = 'SELECT') {
    if (!this.client) return false;
    try {
      const { error } = await this.client
        .from('selection_history')
        .insert([{
          student_id: studentId,
          student_name: studentName,
          team: team,
          action: action,
          timestamp: new Date().toISOString()
        }]);

      if (error) {
        console.error('Supabase recordHistory error:', error);
        return false;
      }
      return true;
    } catch (err) {
      console.error('Supabase recordHistory exception:', err);
      return false;
    }
  }

  // Reset all students in Supabase (Full Draft Reset)
  async resetAllStudents() {
    if (!this.client) return false;
    try {
      const { error: stuError } = await this.client
        .from('students')
        .update({
          selected_by: null,
          selected_at: null,
          selection_order: null,
          updated_at: new Date().toISOString()
        })
        .not('id', 'is', null);

      const { error: stateError } = await this.client
        .from('portal_state')
        .upsert({
          id: 'current_state',
          current_turn: 'A',
          coin_toss_winner: null,
          updated_at: new Date().toISOString()
        });

      const { error: histError } = await this.client
        .from('selection_history')
        .delete()
        .neq('id', 0);

      if (stuError || stateError) {
        console.error('Supabase reset error:', { stuError, stateError, histError });
        return false;
      }
      return true;
    } catch (err) {
      console.error('Supabase resetAllStudents exception:', err);
      return false;
    }
  }

  // Realtime multi-device subscription
  subscribeToRealtime(callbacks = {}) {
    if (!this.client) return;

    try {
      if (this.realtimeChannel) {
        this.client.removeChannel(this.realtimeChannel);
      }

      this.realtimeChannel = this.client
        .channel('arts-fest-live-sync')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'students' },
          (payload) => {
            console.log('⚡ Realtime student update:', payload);
            if (callbacks.onStudentChange) callbacks.onStudentChange(payload);
          }
        )
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'portal_state' },
          (payload) => {
            console.log('⚡ Realtime portal state update:', payload);
            if (callbacks.onStateChange) callbacks.onStateChange(payload);
          }
        )
        .subscribe((status) => {
          console.log('⚡ Supabase Realtime channel status:', status);
          const statusEl = document.getElementById('cloud-sync-status');
          if (statusEl) {
            if (status === 'SUBSCRIBED') {
              statusEl.className = 'cloud-status-pill connected';
              statusEl.innerHTML = '<span class="status-dot"></span> <span class="status-label">Cloud Live</span>';
            } else if (status === 'TIMED_OUT' || status === 'CLOSED') {
              statusEl.className = 'cloud-status-pill warning';
              statusEl.innerHTML = '<span class="status-dot"></span> <span class="status-label">Local Sync</span>';
            }
          }
        });
    } catch (err) {
      console.error('Supabase Realtime subscription error:', err);
    }
  }
}

// Global instance
window.supabaseService = new SupabaseService();
