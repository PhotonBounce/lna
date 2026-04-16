/* ===== FRONT-END (HOSPICE) PAGES ===== */
window.FrontPages = {

 dashboard() {
  return `
<div class="page active" id="pg-dashboard">
 <div class="section-header">
  <h2>📊 Hospice Operations Dashboard</h2>
  <p>Real-time overview of your hospice agency's key performance indicators</p>
 </div>
 <div class="explainer"><span class="ex-icon">💡</span>
  <div><strong>Welcome to HospicePro AI.</strong> This dashboard gives you a 360° view of your census, compliance, visits, and alerts. All data updates in real-time and AI continuously monitors for issues requiring your attention.</div>
 </div>
 <div class="grid-4" style="margin-bottom:24px">
  <div class="stat-card"><div class="stat-num">47</div><div class="stat-label">Active Patients</div><div class="stat-change up">↑ 3 this week</div></div>
  <div class="stat-card"><div class="stat-num green">94%</div><div class="stat-label">Compliance Score</div><div class="stat-change up">↑ 2% from last month</div></div>
  <div class="stat-card"><div class="stat-num cyan">23</div><div class="stat-label">Visits Today</div><div class="stat-change up">↑ 5 vs yesterday</div></div>
  <div class="stat-card"><div class="stat-num amber">3</div><div class="stat-label">Urgent Alerts</div><div class="stat-change down">Needs attention</div></div>
 </div>
 <div class="explainer info"><span class="ex-icon">🤖</span>
  <div><strong>AI Insight:</strong> Based on current admission trends and average length of stay (68 days), your census is projected to reach 52 patients within 30 days. Consider reviewing staffing ratios per California CCR §70577 — you may need 1 additional RN by next month.</div>
 </div>
 <div class="grid-2" style="margin-bottom:24px">
  <div class="card">
   <div class="card-header"><span class="card-title">📋 Recent Activity</span><span class="tag tag-blue">Live</span></div>
   <div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Activity feed shows the latest actions across your agency.</div></div>
   <div style="font-size:13px">
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)"><span>✅</span><div><div>Visit completed — Maria Santos (RN) visited Eleanor Vance</div><div style="display:flex;gap:8px;margin-top:4px"><span class="tag tag-green">Visit</span><span style="font-size:11px;color:var(--text3)">10:32 AM</span></div></div></div>
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)"><span>��</span><div><div>Note signed — Dr. Kim approved pain management update</div><div style="display:flex;gap:8px;margin-top:4px"><span class="tag tag-purple">Clinical</span><span style="font-size:11px;color:var(--text3)">10:15 AM</span></div></div></div>
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)"><span>⚠️</span><div><div>Compliance alert — F2F encounter due in 3 days for J. Morales</div><div style="display:flex;gap:8px;margin-top:4px"><span class="tag tag-amber">Alert</span><span style="font-size:11px;color:var(--text3)">09:58 AM</span></div></div></div>
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)"><span>📦</span><div><div>DME order — Hospital bed delivered to R. Thompson residence</div><div style="display:flex;gap:8px;margin-top:4px"><span class="tag tag-cyan">DME</span><span style="font-size:11px;color:var(--text3)">09:44 AM</span></div></div></div>
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)"><span>🆕</span><div><div>New admission — Patient intake started for S. Williams</div><div style="display:flex;gap:8px;margin-top:4px"><span class="tag tag-blue">Admission</span><span style="font-size:11px;color:var(--text3)">09:30 AM</span></div></div></div>
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)"><span>💊</span><div><div>Medication change — Morphine dose adjusted for P. Garcia</div><div style="display:flex;gap:8px;margin-top:4px"><span class="tag tag-rose">Medication</span><span style="font-size:11px;color:var(--text3)">09:15 AM</span></div></div></div>
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0"><span>📞</span><div><div>Family call — Daughter of E. Vance requesting care conference</div><div style="display:flex;gap:8px;margin-top:4px"><span class="tag tag-purple">Family</span><span style="font-size:11px;color:var(--text3)">08:50 AM</span></div></div></div>
   </div>
  </div>
  <div class="card">
   <div class="card-header"><span class="card-title">🎯 Compliance Overview</span><span class="tag tag-green">94%</span></div>
   <div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Track compliance across CMS CoPs and California DHCS requirements.</div></div>
   <div class="compliance-item"><div class="compliance-label"><span>Patient Rights (CMS §418.52)</span><span style="font-weight:700">98%</span></div><div class="progress-bar"><div class="progress-fill" style="width:98%;background:var(--green)"></div></div></div>
   <div class="compliance-item"><div class="compliance-label"><span>Assessment & Care Planning</span><span style="font-weight:700">95%</span></div><div class="progress-bar"><div class="progress-fill" style="width:95%;background:var(--green)"></div></div></div>
   <div class="compliance-item"><div class="compliance-label"><span>QAPI Program (CMS §418.58)</span><span style="font-weight:700">91%</span></div><div class="progress-bar"><div class="progress-fill" style="width:91%;background:var(--green)"></div></div></div>
   <div class="compliance-item"><div class="compliance-label"><span>Clinical Records (CMS §418.76)</span><span style="font-weight:700">88%</span></div><div class="progress-bar"><div class="progress-fill" style="width:88%;background:var(--amber)"></div></div></div>
   <div class="compliance-item"><div class="compliance-label"><span>CA Title 22 Documentation</span><span style="font-weight:700">85%</span></div><div class="progress-bar"><div class="progress-fill" style="width:85%;background:var(--amber)"></div></div></div>
   <div class="compliance-item"><div class="compliance-label"><span>Controlled Substances (DEA)</span><span style="font-weight:700">100%</span></div><div class="progress-bar"><div class="progress-fill" style="width:100%;background:var(--green)"></div></div></div>
   <div class="compliance-item"><div class="compliance-label"><span>Infection Control</span><span style="font-weight:700">96%</span></div><div class="progress-bar"><div class="progress-fill" style="width:96%;background:var(--green)"></div></div></div>
   <div class="compliance-item"><div class="compliance-label"><span>Staffing Ratios (CCR §70577)</span><span style="font-weight:700">92%</span></div><div class="progress-bar"><div class="progress-fill" style="width:92%;background:var(--green)"></div></div></div>
  </div>
 </div>
 <div class="explainer success"><span class="ex-icon">✅</span>
  <div><strong>Compliance Tip:</strong> Your next DHCS survey is estimated in ~45 days. Run a mock survey using our AI audit tool in the <strong>Compliance Center</strong>.</div>
 </div>
 <div class="card">
  <div class="card-header"><span class="card-title">📅 Today's Visit Schedule</span><button class="btn btn-sm btn-outline" onclick="navigateTo('scheduling')">View Full Schedule →</button></div>
  <div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>AI-optimized routes reduce drive time by avg 23%.</div></div>
  <div class="schedule-row"><span style="font-weight:600;color:var(--cyan)">8:00 AM</span><span>Maria Santos, RN</span><span style="font-weight:600">Eleanor Vance</span><span class="tag tag-green">Routine</span><span style="color:var(--green)">✅ Done</span><span style="font-size:11px;color:var(--text3)">🗺️</span></div>
  <div class="schedule-row"><span style="font-weight:600;color:var(--cyan)">9:30 AM</span><span>Maria Santos, RN</span><span style="font-weight:600">James Morales</span><span class="tag tag-green">Pain Mgmt</span><span style="color:var(--green)">✅ Done</span><span style="font-size:11px;color:var(--text3)">🗺️</span></div>
  <div class="schedule-row"><span style="font-weight:600;color:var(--cyan)">10:30 AM</span><span>David Chen, LVN</span><span style="font-weight:600">Patricia Garcia</span><span class="tag tag-amber">Med Check</span><span style="color:var(--amber)">🔄 Active</span><span style="font-size:11px;color:var(--text3)">🗺️</span></div>
  <div class="schedule-row"><span style="font-weight:600;color:var(--cyan)">11:00 AM</span><span>Sarah Johnson, RN</span><span style="font-weight:600">Robert Thompson</span><span class="tag tag-blue">Assessment</span><span style="color:var(--blue)">📋 Next</span><span style="font-size:11px;color:var(--text3)">🗺️</span></div>
  <div class="schedule-row"><span style="font-weight:600;color:var(--cyan)">1:00 PM</span><span>Maria Santos, RN</span><span style="font-weight:600">Susan Williams</span><span class="tag tag-blue">Admission</span><span style="color:var(--blue)">📋 Upcoming</span><span style="font-size:11px;color:var(--text3)">🗺️</span></div>
  <div class="schedule-row"><span style="font-weight:600;color:var(--cyan)">2:30 PM</span><span>Lisa Park, MSW</span><span style="font-weight:600">John Davis</span><span class="tag tag-purple">Social Work</span><span style="color:var(--blue)">📋 Upcoming</span><span style="font-size:11px;color:var(--text3)">🗺️</span></div>
  <div class="schedule-row"><span style="font-weight:600;color:var(--cyan)">3:00 PM</span><span>Rev. M. Brown</span><span style="font-weight:600">Eleanor Vance</span><span class="tag tag-purple">Spiritual</span><span style="color:var(--blue)">📋 Upcoming</span><span style="font-size:11px;color:var(--text3)">🗺️</span></div>
 </div>
</div>`;
 },

 patients() {
  var rows = [
   {name:'Eleanor Vance',age:78,dx:'Lung Cancer (C34.90)',los:142,status:'stable',nurse:'M. Santos, RN',cert:'Valid until May 12'},
   {name:'James Morales',age:84,dx:'CHF (I50.9)',los:89,status:'review',nurse:'M. Santos, RN',cert:'⚠️ F2F due in 3 days'},
   {name:'Patricia Garcia',age:71,dx:'COPD (J44.1)',los:203,status:'stable',nurse:'D. Chen, LVN',cert:'Valid until June 1'},
   {name:'Robert Thompson',age:92,dx:"Alzheimer's (G30.9)",los:67,status:'urgent',nurse:'S. Johnson, RN',cert:'⚠️ Recert needed'},
   {name:'Susan Williams',age:65,dx:'Pancreatic Cancer (C25.9)',los:2,status:'new-admit',nurse:'M. Santos, RN',cert:'Initial cert'},
   {name:'John Davis',age:88,dx:'Renal Failure (N18.6)',los:156,status:'stable',nurse:'L. Park, MSW',cert:'Valid until May 28'},
   {name:'Margaret Wilson',age:76,dx:'ALS (G12.21)',los:112,status:'review',nurse:'S. Johnson, RN',cert:'⚠️ Care plan update due'},
   {name:'William Brown',age:81,dx:'Liver Cancer (C22.0)',los:34,status:'urgent',nurse:'D. Chen, LVN',cert:'⚠️ Symptom escalation'},
   {name:'Dorothy Martinez',age:90,dx:'CVA (I63.9)',los:245,status:'stable',nurse:'M. Santos, RN',cert:'Valid until April 30'},
   {name:'Richard Anderson',age:73,dx:'Mesothelioma (C45.0)',los:18,status:'new-admit',nurse:'S. Johnson, RN',cert:'Initial cert'},
   {name:'Helen Taylor',age:86,dx:'CHF (I50.9)',los:178,status:'stable',nurse:'D. Chen, LVN',cert:'Valid until May 15'},
   {name:'Charles Thomas',age:79,dx:'Prostate Cancer (C61)',los:95,status:'review',nurse:'M. Santos, RN',cert:'⚠️ IDG review pending'},
   {name:'Frances Jackson',age:94,dx:'Debility (R54)',los:301,status:'review',nurse:'L. Park, MSW',cert:'⚠️ Extended prognosis review'},
   {name:'Kenneth White',age:68,dx:'Glioblastoma (C71.9)',los:45,status:'urgent',nurse:'S. Johnson, RN',cert:'⚠️ Rapid decline noted'}
  ];
  var html = rows.map(function(p){
   var statusText = p.status==='stable'?'● Stable':p.status==='review'?'◐ Review':p.status==='urgent'?'⚠ Urgent':'★ New';
   return '<div class="patient-row" data-status="'+p.status+'"><div><div class="patient-name">'+p.name+' <span style="font-size:12px;color:var(--text3)">('+p.age+'y)</span></div><div class="patient-meta">'+p.dx+' · LOS: '+p.los+' days · '+p.nurse+'</div><div style="font-size:11px;color:var(--text3);margin-top:2px">'+p.cert+'</div></div><span class="patient-status '+p.status+'">'+statusText+'</span></div>';
  }).join('');

  return '<div class="page active" id="pg-patients">' +
   '<div class="section-header"><h2>👥 Patient Census & Management</h2><p>Complete view of all patients across your hospice program</p></div>' +
   '<div class="explainer"><span class="ex-icon">💡</span><div><strong>Patient Management Hub.</strong> View and manage your entire census. AI monitors each patient for compliance deadlines, recertification dates, and care plan updates. Color-coded status indicators show who needs attention. Click any patient for their full chart.</div></div>' +
   '<div class="grid-4" style="margin-bottom:24px"><div class="stat-card"><div class="stat-num">47</div><div class="stat-label">Active Census</div></div><div class="stat-card"><div class="stat-num green">5</div><div class="stat-label">New This Month</div></div><div class="stat-card"><div class="stat-num amber">8</div><div class="stat-label">Recert Due (30d)</div></div><div class="stat-card"><div class="stat-num cyan">68</div><div class="stat-label">Avg Length of Stay</div></div></div>' +
   '<div class="explainer info"><span class="ex-icon">🤖</span><div><strong>AI Alert:</strong> 3 patients require face-to-face encounters within 14 days. 2 patients have care plan updates overdue by >48 hours. Auto-notifications sent to assigned clinicians.</div></div>' +
   '<div class="tab-bar"><div class="tab-item active" onclick="filterPatients(\'all\',this)">All (47)</div><div class="tab-item" onclick="filterPatients(\'stable\',this)">Stable (28)</div><div class="tab-item" onclick="filterPatients(\'review\',this)">Needs Review (11)</div><div class="tab-item" onclick="filterPatients(\'urgent\',this)">Urgent (5)</div><div class="tab-item" onclick="filterPatients(\'new\',this)">New Admits (3)</div></div>' +
   '<div id="patientList">' + html + '</div>' +
   '<div class="explainer warn" style="margin-top:20px"><span class="ex-icon">⚠️</span><div><strong>California DHCS Reminder:</strong> Per Title 22 §74659, all hospice patients must have a documented comprehensive assessment within 5 calendar days of election. 1 new admission (S. Williams) has 3 days remaining.</div></div>' +
  '</div>';
 },

 documentation() {
  return '<div class="page active" id="pg-documentation">' +
   '<div class="section-header"><h2>📝 AI Clinical Documentation</h2><p>Smart note-taking with ML-powered autocomplete and compliance checking</p></div>' +
   '<div class="explainer"><span class="ex-icon">🤖</span><div><strong>AI-Powered Documentation.</strong> Start typing your clinical notes and our ML engine will suggest completions based on hospice-specific templates, CMS requirements, and California regulations. Press <strong>Tab</strong> to accept suggestions. The AI ensures your documentation meets all regulatory requirements automatically.</div></div>' +
   '<div class="grid-2">' +
    '<div class="card">' +
     '<div class="card-header"><span class="card-title">New Clinical Note</span></div>' +
     '<div style="margin-bottom:12px"><label style="font-size:12px;color:var(--text2);display:block;margin-bottom:6px">Patient</label><select style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:10px;color:var(--text);font-size:14px" id="notePatient"><option>Eleanor Vance — Lung Cancer</option><option>James Morales — CHF</option><option>Patricia Garcia — COPD</option><option>Robert Thompson — Alzheimer\'s</option><option>Susan Williams — Pancreatic Cancer</option></select></div>' +
     '<div style="margin-bottom:12px"><label style="font-size:12px;color:var(--text2);display:block;margin-bottom:6px">Note Type</label><select style="width:100%;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:10px;color:var(--text);font-size:14px" id="noteType"><option value="visit">Routine Visit Note</option><option value="pain">Pain Assessment</option><option value="symptom">Symptom Management</option><option value="medication">Medication Reconciliation</option><option value="admission">Admission Assessment</option><option value="spiritual">Spiritual Care</option><option value="social">Social Work Assessment</option></select></div>' +
     '<div class="smart-note-area"><textarea id="clinicalNote" placeholder="Start typing your note... AI will suggest completions as you type. Try typing \'pain\', \'visit\', \'symptom\', or \'medication\' to see AI autocomplete." oninput="onNoteInput(this.value)"></textarea><div class="autocomplete-box" id="autoBox" onclick="acceptSuggestion()"><span id="autoText"></span><span class="key-hint">Tab to accept</span></div></div>' +
     '<div class="ml-status-bar"><span class="ml-dot"></span> ML Engine active — analyzing note in real-time</div>' +
    '</div>' +
    '<div>' +
     '<div class="card" style="margin-bottom:20px"><div class="card-header"><span class="card-title">AI Compliance Checker</span><span class="badge-live">Live Analysis</span></div><div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>As you write, the AI checks your note against CMS documentation requirements and California-specific regulations in real-time.</div></div><div id="complianceChecks"><div style="padding:20px;text-align:center;color:var(--text3);font-size:13px">Start typing a note to see real-time compliance analysis…</div></div></div>' +
     '<div class="card"><div class="card-header"><span class="card-title">📚 Note Templates</span></div><div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Quick-start templates pre-filled with regulatory-compliant language.</div></div>' +
     ['Routine Visit','Pain Assessment','Symptom Management','Medication Reconciliation','Admission Assessment','Spiritual Care Note','Social Work Assessment','GIP Justification'].map(function(t,i){return '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--bg);border:1px solid var(--border);border-radius:8px;margin-bottom:6px;cursor:pointer;transition:border-color .2s" onmouseover="this.style.borderColor=\'rgba(99,102,241,0.3)\'" onmouseout="this.style.borderColor=\'var(--border)\'" onclick="loadTemplate('+i+')"><span style="font-size:13px;font-weight:600">'+t+'</span><span style="font-size:11px;color:var(--text3)">Click to load →</span></div>';}).join('') +
     '</div>' +
    '</div>' +
   '</div>' +
  '</div>';
 },

 compliance() {
  var caRules = window.MLEngine ? MLEngine.complianceRules.california : [];
  var fedRules = window.MLEngine ? MLEngine.complianceRules.federal : [];
  var caRows = caRules.map(function(r){return '<tr><td><span class="tag tag-purple">'+r.code+'</span></td><td>'+r.rule+'</td><td>'+r.category+'</td><td><span class="tag tag-green">✓ Met</span></td></tr>';}).join('');
  var fedRows = fedRules.map(function(r){var sc=r.severity==='critical'?'rose':r.severity==='high'?'amber':'purple';return '<tr><td><span class="tag tag-blue">'+r.code+'</span></td><td>'+r.rule+'</td><td>'+r.category+'</td><td><span class="tag tag-'+sc+'">'+r.severity+'</span></td><td><span class="tag tag-green">✓ Compliant</span></td></tr>';}).join('');

  return '<div class="page active" id="pg-compliance">' +
   '<div class="section-header"><h2>🛡️ Compliance Center</h2><p>California-first regulatory compliance with nationwide coverage</p></div>' +
   '<div class="explainer"><span class="ex-icon">🏛️</span><div><strong>Compliance Hub.</strong> This center tracks compliance with ALL applicable hospice regulations — California DHCS & CDPH requirements first, then CMS CoPs, and DEA rules. AI monitors for regulatory changes and alerts you. All rules sourced from official government publications and updated daily via our data harvesting system.</div></div>' +
   '<div class="tab-bar"><div class="tab-item active" onclick="showCompTab(\'ca\',this)">🐻 California (DHCS/CDPH)</div><div class="tab-item" onclick="showCompTab(\'fed\',this)">🇺🇸 Federal (CMS CoPs)</div><div class="tab-item" onclick="showCompTab(\'dea\',this)">💊 DEA / Controlled Substances</div><div class="tab-item" onclick="showCompTab(\'survey\',this)">📋 Survey Readiness</div></div>' +

   '<div id="compTab-ca">' +
    '<div class="explainer warn"><span class="ex-icon">📢</span><div><strong>California Focus:</strong> Your agency operates under California DHCS licensure. All programs must comply with HSC §1745-1796 and Title 22, Division 5.</div></div>' +
    '<div class="grid-2" style="margin-bottom:20px"><div class="card"><div class="card-title" style="margin-bottom:16px">California Regulatory Requirements</div><table class="data-table"><thead><tr><th>Code</th><th>Requirement</th><th>Category</th><th>Status</th></tr></thead><tbody>'+caRows+'</tbody></table></div>' +
    '<div><div class="card" style="margin-bottom:20px"><div class="card-title" style="margin-bottom:12px">CA Compliance Score</div><div style="text-align:center;padding:20px"><div style="font-size:64px;font-weight:900;background:linear-gradient(135deg,#22c55e,#4ade80);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">94%</div><div style="color:var(--text2);font-size:14px;margin-top:4px">Excellent Compliance</div></div><div class="explainer success" style="margin-bottom:0"><span class="ex-icon">✅</span><div>Your agency exceeds the state average of 87%. Focus on clinical records to reach 96%+.</div></div></div>' +
    '<div class="card"><div class="card-title" style="margin-bottom:12px">Key CA Deadlines</div><div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>License Renewal</span><span style="color:var(--green);font-weight:600">Sep 15, 2026 (152d)</span></div><div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>DHCS Survey Window</span><span style="color:var(--amber);font-weight:600">May 2026 est. (45d)</span></div><div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Staff Competency Reviews</span><span style="color:var(--amber);font-weight:600">Jun 30, 2026 (75d)</span></div><div style="display:flex;justify-content:space-between;padding:10px 0;font-size:13px"><span>QAPI Annual Report</span><span style="color:var(--green);font-weight:600">Dec 31, 2026 (259d)</span></div></div></div></div>' +
   '</div>' +

   '<div id="compTab-fed" style="display:none">' +
    '<div class="explainer info"><span class="ex-icon">🇺🇸</span><div><strong>Federal CMS Conditions of Participation.</strong> Minimum requirements for all Medicare-certified hospices per 42 CFR Part 418. AI cross-references your documentation against every CoP.</div></div>' +
    '<div class="card"><table class="data-table"><thead><tr><th>CMS Code</th><th>Condition</th><th>Category</th><th>Severity</th><th>Status</th></tr></thead><tbody>'+fedRows+'</tbody></table></div>' +
   '</div>' +

   '<div id="compTab-dea" style="display:none">' +
    '<div class="explainer rose"><span class="ex-icon">💊</span><div><strong>Controlled Substance Compliance.</strong> DEA Schedule II-V managed per 21 CFR Part 1300-1321 and California BPC §4170.</div></div>' +
    '<div class="grid-2"><div class="card"><div class="card-title" style="margin-bottom:16px">Controlled Substance Tracking</div>' +
    '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border);font-size:13px"><div><div style="font-weight:600">Morphine Sulfate (Schedule II)</div><div style="font-size:11px;color:var(--text3)">47 active orders</div></div><span class="tag tag-green">✓ Compliant</span></div>' +
    '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border);font-size:13px"><div><div style="font-weight:600">Oxycodone (Schedule II)</div><div style="font-size:11px;color:var(--text3)">12 active orders</div></div><span class="tag tag-green">✓ Compliant</span></div>' +
    '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid var(--border);font-size:13px"><div><div style="font-weight:600">Fentanyl Patches (Schedule II)</div><div style="font-size:11px;color:var(--text3)">8 active orders</div></div><span class="tag tag-green">✓ Compliant</span></div>' +
    '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;font-size:13px"><div><div style="font-weight:600">Lorazepam (Schedule IV)</div><div style="font-size:11px;color:var(--text3)">23 active orders</div></div><span class="tag tag-green">✓ Compliant</span></div></div>' +
    '<div class="card"><div class="card-title" style="margin-bottom:16px">DEA Compliance Checklist</div>' +
    ['DEA Registration current & displayed','Biennial inventory completed (Jan 2026)','All Schedule II orders on DEA Form 222','Destruction witnessed by two employees','Records maintained for 2+ years','Loss/theft reported to DEA within 1 business day','E-prescribing EPCS-compliant','Drug disposal per EPA & DEA guidelines'].map(function(item){return '<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px"><span style="color:var(--green)">☑</span>'+item+'</div>';}).join('') +
    '</div></div>' +
   '</div>' +

   '<div id="compTab-survey" style="display:none">' +
    '<div class="explainer success"><span class="ex-icon">📋</span><div><strong>Survey Readiness Tool.</strong> AI analyzes your documentation, policies, and procedures to predict your survey outcome.</div></div>' +
    '<div class="card" style="margin-bottom:20px"><div class="card-header"><span class="card-title">Mock Survey Readiness Score</span></div><div style="text-align:center;padding:30px"><div style="font-size:72px;font-weight:900;background:linear-gradient(135deg,#22c55e,#4ade80);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">91%</div><div style="color:var(--text2);margin-top:4px">Survey Ready — Minor improvements recommended</div></div>' +
    '<div class="grid-3">' +
    [{area:'Clinical Records',score:88,items:'2 notes missing signatures'},{area:'Patient Rights',score:98,items:'All documentation current'},{area:'Care Planning',score:92,items:'1 IDG meeting overdue'},{area:'Medication Mgmt',score:95,items:'All counts verified'},{area:'Infection Control',score:90,items:'1 staff training overdue'},{area:'QAPI Program',score:87,items:'Q1 report needs finalization'}].map(function(a){var c=a.score>=95?'var(--green)':a.score>=90?'var(--amber)':'var(--rose)';return '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border)"><div style="font-weight:700;font-size:14px;margin-bottom:8px">'+a.area+'</div><div style="font-size:28px;font-weight:900;color:'+c+'">'+a.score+'%</div><div style="font-size:11px;color:var(--text3);margin-top:4px">'+a.items+'</div></div>';}).join('') +
    '</div></div><button class="btn btn-primary" onclick="showToast(\'🔍 Running AI Mock Survey... Results will appear in 30 seconds\')">🤖 Run AI Mock Survey</button>' +
   '</div>' +
  '</div>';
 },

 scheduling() {
  return '<div class="page active" id="pg-scheduling">' +
   '<div class="section-header"><h2>📅 Intelligent Scheduling & Route Optimization</h2><p>AI-optimized visit schedules with smart route planning</p></div>' +
   '<div class="explainer"><span class="ex-icon">🗺️</span><div><strong>Smart Scheduling.</strong> AI analyzes patient locations, visit priorities, clinician specialties, traffic patterns, and CMS-required visit frequencies to create optimal daily schedules. Average drive time reduction: <strong>23%</strong>.</div></div>' +
   '<div class="grid-4" style="margin-bottom:24px"><div class="stat-card"><div class="stat-num">23</div><div class="stat-label">Total Visits Today</div></div><div class="stat-card"><div class="stat-num green">17</div><div class="stat-label">Completed</div></div><div class="stat-card"><div class="stat-num cyan">6</div><div class="stat-label">Remaining</div></div><div class="stat-card"><div class="stat-num amber">142 mi</div><div class="stat-label">Total Drive Distance</div></div></div>' +
   '<div class="explainer info"><span class="ex-icon">🤖</span><div><strong>AI Route Insight:</strong> By reordering 2 visits for Maria Santos, we saved 18 minutes and 7.3 miles. Robert Thompson\'s neighborhood has road construction — adding 12 min to ETA. Schedule adjusted automatically.</div></div>' +
   '<div class="grid-2"><div class="card"><div class="card-header"><span class="card-title">Today\'s Schedule — Maria Santos, RN</span></div>' +
   [{time:'8:00 AM',patient:'E. Vance',addr:'1234 Oak St, Pasadena',type:'Routine',stat:'✅'},{time:'9:30 AM',patient:'J. Morales',addr:'567 Maple Ave, Glendale',type:'Pain Mgmt',stat:'✅'},{time:'10:45 AM',patient:'D. Martinez',addr:'890 Pine Rd, Arcadia',type:'Medication',stat:'✅'},{time:'12:00 PM',patient:'C. Thomas',addr:'234 Elm Dr, Monrovia',type:'Assessment',stat:'🔄'},{time:'1:30 PM',patient:'S. Williams',addr:'678 Cedar Ln, Duarte',type:'Admission',stat:'📋'},{time:'3:00 PM',patient:'H. Taylor',addr:'901 Birch Way, Azusa',type:'Routine',stat:'📋'},{time:'4:15 PM',patient:'B. Harris',addr:'345 Walnut Ct, Covina',type:'Wound Care',stat:'📋'}].map(function(v){return '<div style="display:flex;align-items:center;gap:14px;padding:12px 16px;background:var(--bg);border:1px solid var(--border);border-radius:8px;margin-bottom:6px;font-size:13px"><span style="font-weight:700;color:var(--cyan);width:60px">'+v.time+'</span><div style="flex:1"><div style="font-weight:600">'+v.patient+'</div><div style="font-size:11px;color:var(--text3)">'+v.addr+'</div></div><span class="tag tag-purple">'+v.type+'</span><span>'+v.stat+'</span></div>';}).join('') +
   '</div><div><div class="card" style="margin-bottom:20px"><div class="card-header"><span class="card-title">🗺️ Route Map (Simulated)</span></div><div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:40px;text-align:center"><div style="font-size:48px;margin-bottom:12px">🗺️</div><div style="color:var(--text2);font-size:14px">Interactive map shows optimized route</div><div style="color:var(--text3);font-size:12px;margin-top:4px">Pasadena → Glendale → Arcadia → Monrovia → Duarte → Azusa → Covina</div><div style="color:var(--cyan);font-size:13px;margin-top:12px;font-weight:600">Total: 42.3 miles · Est. 1h 48m drive time</div><div style="color:var(--green);font-size:12px;margin-top:4px">AI Optimized: Saved 7.3 miles vs. chronological order</div></div></div>' +
   '<div class="card"><div class="card-header"><span class="card-title">📊 Weekly Visit Stats</span></div><div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>CMS requires hospice visits per the plan of care. AI ensures minimum frequencies are met.</div></div>' +
   [{day:'Monday',visits:25,miles:156,pct:100},{day:'Tuesday',visits:23,miles:142,pct:92},{day:'Wednesday',visits:22,miles:138,pct:88},{day:'Thursday',visits:24,miles:148,pct:96},{day:'Friday',visits:20,miles:134,pct:80}].map(function(d){return '<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="width:80px;font-size:12px;color:var(--text2);text-align:right">'+d.day+'</span><div style="flex:1;height:22px;background:var(--border);border-radius:4px;overflow:hidden"><div style="width:'+d.pct+'%;height:100%;background:var(--grad);border-radius:4px;display:flex;align-items:center;padding-left:8px;font-size:11px;color:#fff;font-weight:600">'+d.visits+' visits · '+d.miles+' mi</div></div></div>';}).join('') +
   '</div></div></div>' +
  '</div>';
 },

 billing() {
  return '<div class="page active" id="pg-billing">' +
   '<div class="section-header"><h2>💰 Billing & Revenue Cycle Management</h2><p>End-to-end claim tracking, eligibility verification, and revenue analytics</p></div>' +
   '<div class="explainer"><span class="ex-icon">💡</span><div><strong>Revenue Cycle Hub.</strong> Manage Medicare/Medicaid claims, track reimbursements, verify eligibility, and monitor financial health. AI auto-codes diagnoses, flags claims at risk of denial, and ensures proper level-of-care billing per CMS §418.302. All billing follows Medicare Hospice Benefit structure (routine home care, continuous home care, GIP, inpatient respite).</div></div>' +
   '<div class="grid-4" style="margin-bottom:24px"><div class="stat-card"><div class="stat-num">$284K</div><div class="stat-label">Monthly Revenue</div><div class="stat-change up">↑ 8% MoM</div></div><div class="stat-card"><div class="stat-num green">96.2%</div><div class="stat-label">Clean Claim Rate</div><div class="stat-change up">↑ 1.3%</div></div><div class="stat-card"><div class="stat-num cyan">12 days</div><div class="stat-label">Avg Days to Payment</div><div class="stat-change up">↓ 3 days improved</div></div><div class="stat-card"><div class="stat-num amber">$18.4K</div><div class="stat-label">Pending Claims</div><div class="stat-change down">7 claims awaiting</div></div></div>' +
   '<div class="explainer info"><span class="ex-icon">🤖</span><div><strong>AI Billing Alert:</strong> 2 claims flagged — missing physician NPI on GIP authorization and F2F documentation incomplete. AI has auto-drafted corrections.</div></div>' +
   '<div class="grid-2"><div class="card"><div class="card-header"><span class="card-title">Revenue by Level of Care</span></div><div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>2026 CA rates: Routine $216.45/day, Continuous $63.07/hr, GIP $1,108.24/day, Respite $481.24/day.</div></div>' +
   '<div class="rev-row"><span class="rev-label">Routine</span><div class="rev-track"><div class="rev-fill" style="width:78%;background:var(--purple)">$221,520 (78%)</div></div></div>' +
   '<div class="rev-row"><span class="rev-label">Continuous</span><div class="rev-track"><div class="rev-fill" style="width:28%;background:var(--cyan)">$22,720 (8%)</div></div></div>' +
   '<div class="rev-row"><span class="rev-label">GIP</span><div class="rev-track"><div class="rev-fill" style="width:35%;background:var(--amber)">$28,400 (10%)</div></div></div>' +
   '<div class="rev-row"><span class="rev-label">Respite</span><div class="rev-track"><div class="rev-fill" style="width:15%;background:var(--green)">$11,360 (4%)</div></div></div></div>' +
   '<div class="card"><div class="card-header"><span class="card-title">Claims Pipeline</span></div><table class="data-table"><thead><tr><th>Patient</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead><tbody>' +
   '<tr><td style="font-weight:600">E. Vance</td><td><span class="tag tag-purple">Routine</span></td><td>$4,329</td><td><span class="tag tag-green">Paid</span></td></tr>' +
   '<tr><td style="font-weight:600">J. Morales</td><td><span class="tag tag-purple">Routine</span></td><td>$3,245</td><td><span class="tag tag-blue">Submitted</span></td></tr>' +
   '<tr><td style="font-weight:600">R. Thompson</td><td><span class="tag tag-purple">GIP</span></td><td>$5,541</td><td><span class="tag tag-amber">⚠ Flagged</span></td></tr>' +
   '<tr><td style="font-weight:600">P. Garcia</td><td><span class="tag tag-purple">Routine</span></td><td>$4,112</td><td><span class="tag tag-green">Paid</span></td></tr>' +
   '<tr><td style="font-weight:600">W. Brown</td><td><span class="tag tag-purple">Continuous</span></td><td>$2,018</td><td><span class="tag tag-purple">Pending</span></td></tr>' +
   '</tbody></table></div></div>' +
   '<div class="explainer warn" style="margin-top:20px"><span class="ex-icon">⚠️</span><div><strong>Medicare Cap Alert:</strong> Current cap tracking shows your agency at 72% of annual Medicare hospice cap ($34,524.71/beneficiary FY2026). AI projects you will remain within cap.</div></div>' +
  '</div>';
 },

 familyPortal() {
  return '<div class="page active" id="pg-family">' +
   '<div class="section-header"><h2>👨‍👩‍👧 Family & Caregiver Portal</h2><p>Secure portal for families to stay connected with their loved one\'s care team</p></div>' +
   '<div class="explainer"><span class="ex-icon">❤️</span><div><strong>Family Portal Preview.</strong> This is what families see when they log in. They can view visit summaries, communicate with the care team, access educational resources, and track the care plan — all HIPAA and California CMIA compliant.</div></div>' +
   '<div class="grid-2"><div class="card"><div class="card-title" style="margin-bottom:16px">Care Updates for Eleanor Vance</div><div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Families see simplified, plain-language summaries — never raw clinical notes.</div></div>' +
   '<div style="padding:14px 0;border-bottom:1px solid var(--border)"><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:13px">Maria Santos, RN</span><span style="font-size:11px;color:var(--text3)">Today, 10:32 AM</span></div><div style="font-size:13px;color:var(--text2);line-height:1.7">Routine visit completed. Eleanor is resting comfortably. Pain well-controlled. Medications reviewed — no changes. Next visit Thursday.</div></div>' +
   '<div style="padding:14px 0;border-bottom:1px solid var(--border)"><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:13px">Rev. Michael Brown, Chaplain</span><span style="font-size:11px;color:var(--text3)">Apr 14, 2:15 PM</span></div><div style="font-size:13px;color:var(--text2);line-height:1.7">Spiritual care visit. Eleanor enjoyed reflecting on family memories. She expressed feeling at peace.</div></div>' +
   '<div style="padding:14px 0;border-bottom:1px solid var(--border)"><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-weight:600;font-size:13px">Lisa Park, MSW</span><span style="font-size:11px;color:var(--text3)">Apr 12, 3:00 PM</span></div><div style="font-size:13px;color:var(--text2);line-height:1.7">Social work visit. Discussed community resources with daughter. Advance directive review completed. Caregiver support info provided.</div></div>' +
   '</div><div><div class="card" style="margin-bottom:20px"><div class="card-title" style="margin-bottom:16px">📚 Caregiver Resources</div><div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Educational materials curated by AI based on the patient\'s diagnosis and current needs.</div></div>' +
   ['📖 Understanding Hospice Care','💊 Medication Guide for Caregivers','🫂 Self-Care for Family Caregivers','📋 When to Call the Hospice Nurse','🤝 Grief & Bereavement Resources','⚖️ Patient Rights Under California Law','📞 24/7 Emergency Contact Information'].map(function(r){return '<div style="padding:10px 14px;background:var(--bg);border:1px solid var(--border);border-radius:8px;margin-bottom:6px;font-size:13px;cursor:pointer">'+r+'</div>';}).join('') +
   '</div><div class="card"><div class="card-title" style="margin-bottom:16px">💬 Message Care Team</div><textarea style="width:100%;height:80px;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:14px;color:var(--text);font-size:14px;resize:none" placeholder="Type your message to the care team..."></textarea><div style="display:flex;justify-content:flex-end;margin-top:10px"><button class="btn btn-sm btn-primary" onclick="showToast(\'📨 Message sent to care team!\')">Send Message</button></div></div></div></div>' +
  '</div>';
 },

 dme() {
  return '<div class="page active" id="pg-dme">' +
   '<div class="section-header"><h2>📦 DME (Durable Medical Equipment)</h2><p>Track, order, and manage all medical equipment for your patients</p></div>' +
   '<div class="explainer"><span class="ex-icon">📦</span><div><strong>DME Hub.</strong> Hospice provides all medically necessary DME per Medicare CoP §418.202. This tracks active equipment, pending orders, pickups, and vendor relationships. DME costs are included in the hospice per diem — proper tracking prevents revenue leakage.</div></div>' +
   '<div class="grid-4" style="margin-bottom:24px"><div class="stat-card"><div class="stat-num">83</div><div class="stat-label">Active Equipment</div></div><div class="stat-card"><div class="stat-num green">5</div><div class="stat-label">Pending Deliveries</div></div><div class="stat-card"><div class="stat-num amber">3</div><div class="stat-label">Pickups Scheduled</div></div><div class="stat-card"><div class="stat-num cyan">$12.4K</div><div class="stat-label">Monthly DME Cost</div></div></div>' +
   '<div class="card"><div class="card-header"><span class="card-title">Active Equipment by Patient</span><button class="btn btn-sm btn-primary" onclick="showToast(\'📦 New DME order form opened\')">+ New Order</button></div><table class="data-table"><thead><tr><th>Patient</th><th>Equipment</th><th>Vendor</th><th>Delivered</th><th>Status</th></tr></thead><tbody>' +
   '<tr><td style="font-weight:600">E. Vance</td><td>Hospital Bed, O2 Concentrator</td><td>MedEquip CA</td><td>Jan 15</td><td><span class="tag tag-green">Active</span></td></tr>' +
   '<tr><td style="font-weight:600">J. Morales</td><td>Wheelchair, Bedside Commode</td><td>HomeHealth Supply</td><td>Feb 3</td><td><span class="tag tag-green">Active</span></td></tr>' +
   '<tr><td style="font-weight:600">R. Thompson</td><td>Hospital Bed, Hoyer Lift, Wheelchair</td><td>MedEquip CA</td><td>Mar 1</td><td><span class="tag tag-green">Active</span></td></tr>' +
   '<tr><td style="font-weight:600">P. Garcia</td><td>O2 Concentrator, Nebulizer</td><td>Respiratory Care Inc</td><td>Nov 10</td><td><span class="tag tag-green">Active</span></td></tr>' +
   '<tr><td style="font-weight:600">S. Williams</td><td>Hospital Bed</td><td>MedEquip CA</td><td>Pending</td><td><span class="tag tag-amber">🚚 In Transit</span></td></tr>' +
   '</tbody></table></div>' +
  '</div>';
 },

 pricing() {
  return '<div class="page active" id="pg-pricing">' +
   '<div class="section-header"><h2>💎 Plans & Pricing</h2><p>Flexible plans designed for hospice agencies of all sizes</p></div>' +
   '<div class="explainer"><span class="ex-icon">💡</span><div><strong>Transparent Pricing.</strong> All plans include unlimited users, HIPAA-compliant hosting, automatic regulatory updates, and 24/7 support. No hidden fees. No long-term contracts.</div></div>' +
   '<div class="pricing-grid" style="margin-bottom:32px">' +
    '<div class="price-card"><div class="price-tier">Starter</div><div class="price-amount">$199<span>/mo</span></div><div class="price-period">per agency location</div><div class="price-trial">✨ 30-day free trial</div><ul class="price-features"><li>Up to 30 active patients</li><li>AI clinical documentation</li><li>Basic compliance monitoring</li><li>Family portal</li><li>Visit scheduling</li><li>Email support</li><li class="disabled">Advanced analytics</li><li class="disabled">Government data harvester</li></ul><button class="btn btn-outline" style="width:100%" onclick="showTrialModal()">Start Free Trial</button></div>' +
    '<div class="price-card featured"><div class="price-tier">Professional</div><div class="price-amount">$349<span>/mo</span></div><div class="price-period">per agency location</div><div class="price-trial">✨ 30-day free trial</div><ul class="price-features"><li>Up to 100 active patients</li><li>AI documentation + autocomplete</li><li>Full compliance suite (CA + Federal)</li><li>Family portal + messaging</li><li>Smart route optimization</li><li>Billing & RCM integration</li><li>DME management</li><li>Priority support</li></ul><button class="btn btn-primary" style="width:100%" onclick="showTrialModal()">Start Free Trial</button></div>' +
    '<div class="price-card"><div class="price-tier">Enterprise</div><div class="price-amount">$599<span>/mo</span></div><div class="price-period">per agency location</div><div class="price-trial">✨ 14-day pilot program</div><ul class="price-features"><li>Unlimited patients</li><li>Everything in Professional</li><li>Government data harvester (ML)</li><li>Custom AI model training</li><li>Multi-location management</li><li>Advanced analytics</li><li>API access & integrations</li><li>Dedicated success manager</li></ul><button class="btn btn-outline" style="width:100%" onclick="showTrialModal()">Contact Sales</button></div>' +
   '</div>' +
   '<div class="explainer info"><span class="ex-icon">📊</span><div><strong>ROI Calculator:</strong> Average hospice agency saves $2,400/mo in admin time and recovers $1,800/mo in missed billing. HospicePro AI pays for itself within the first month.</div></div>' +
   '<div class="card"><div class="card-header"><span class="card-title">Feature Comparison vs Competitors</span></div><table class="compare-table"><thead><tr><th>Feature</th><th class="us">HospicePro AI</th><th>Competitor A</th><th>Competitor B</th><th>Manual</th></tr></thead><tbody>' +
   '<tr><td>AI Documentation Autocomplete</td><td class="us"><span class="check">✓</span></td><td><span class="cross">✗</span></td><td><span class="partial">Partial</span></td><td><span class="cross">✗</span></td></tr>' +
   '<tr><td>Real-time Compliance Monitoring</td><td class="us"><span class="check">✓</span></td><td><span class="check">✓</span></td><td><span class="cross">✗</span></td><td><span class="cross">✗</span></td></tr>' +
   '<tr><td>California-Specific Regulations</td><td class="us"><span class="check">✓</span></td><td><span class="partial">Partial</span></td><td><span class="cross">✗</span></td><td><span class="cross">✗</span></td></tr>' +
   '<tr><td>Government Data Harvester (ML)</td><td class="us"><span class="check">✓</span></td><td><span class="cross">✗</span></td><td><span class="cross">✗</span></td><td><span class="cross">✗</span></td></tr>' +
   '<tr><td>Smart Route Optimization</td><td class="us"><span class="check">✓</span></td><td><span class="cross">✗</span></td><td><span class="check">✓</span></td><td><span class="cross">✗</span></td></tr>' +
   '<tr><td>AI Chatbot Assistant</td><td class="us"><span class="check">✓</span></td><td><span class="cross">✗</span></td><td><span class="cross">✗</span></td><td><span class="cross">✗</span></td></tr>' +
   '<tr><td>Starting Price</td><td class="us">$199/mo</td><td>$399/mo</td><td>$299/mo</td><td>$0 (hidden costs)</td></tr>' +
   '</tbody></table></div>' +
  '</div>';
 }
};

/* ===== Helper functions for front pages ===== */
window.filterPatients = function(status, el) {
 document.querySelectorAll('#pg-patients .tab-item').forEach(function(t){t.classList.remove('active')});
 el.classList.add('active');
 document.querySelectorAll('.patient-row').forEach(function(row) {
  if (status === 'all') { row.style.display = ''; return; }
  var map = {stable:'stable',review:'review',urgent:'urgent','new':'new-admit'};
  row.style.display = row.dataset.status === map[status] ? '' : 'none';
 });
};

window.showCompTab = function(tab, el) {
 el.parentElement.querySelectorAll('.tab-item').forEach(function(t){t.classList.remove('active')});
 el.classList.add('active');
 ['ca','fed','dea','survey'].forEach(function(id) {
  var el2 = document.getElementById('compTab-'+id);
  if (el2) el2.style.display = id === tab ? '' : 'none';
 });
};

window.onNoteInput = function(val) {
 var suggestion = MLEngine.getSuggestion(val);
 var box = document.getElementById('autoBox');
 var txt = document.getElementById('autoText');
 var checks = document.getElementById('complianceChecks');
 if (suggestion && val.length > 3) {
  txt.textContent = suggestion;
  box.style.display = 'block';
 } else {
  box.style.display = 'none';
 }
 if (val.length > 10 && checks) {
  var items = [
   {label:'Patient identification present',ok:val.length>5},
   {label:'Date and time documented',ok:val.length>20},
   {label:'Assessment findings included',ok:val.toLowerCase().indexOf('assess')>=0||val.toLowerCase().indexOf('pain')>=0||val.length>50},
   {label:'Interventions documented',ok:val.toLowerCase().indexOf('recommend')>=0||val.length>80},
   {label:'Plan for next visit stated',ok:val.toLowerCase().indexOf('next')>=0||val.length>100},
   {label:'CMS CoP §418.76 documentation standards',ok:val.length>30},
   {label:'California Title 22 requirements',ok:val.length>60}
  ];
  checks.innerHTML = items.map(function(c){return '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;border-bottom:1px solid var(--border)"><span style="color:'+(c.ok?'var(--green)':'var(--text3)')+'">'+( c.ok?'☑':'☐')+'</span><span style="color:'+(c.ok?'var(--text)':'var(--text3)')+'">'+c.label+'</span></div>';}).join('');
 }
};

window.acceptSuggestion = function() {
 var box = document.getElementById('autoBox');
 var txt = document.getElementById('autoText');
 var note = document.getElementById('clinicalNote');
 if (txt && txt.textContent) {
  note.value += '\n\n' + txt.textContent;
  box.style.display = 'none';
  onNoteInput(note.value);
 }
};

window.loadTemplate = function(idx) {
 var templates = Object.values(MLEngine.noteTemplates);
 var note = document.getElementById('clinicalNote');
 if (note && templates[idx]) {
  note.value = templates[idx];
  onNoteInput(note.value);
  showToast('📝 Template loaded — customize the bracketed fields');
 }
};

document.addEventListener('keydown', function(e) {
 var box = document.getElementById('autoBox');
 if (e.key === 'Tab' && box && box.style.display === 'block') {
  e.preventDefault();
  acceptSuggestion();
 }
});
