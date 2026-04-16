/* ===== MAIN APP — Navigation, Routing, Mode Switching ===== */

var currentMode = 'front';
var currentPage = 'dashboard';

/* Navigation configs */
var frontNav = [
 {section:'OPERATIONS', items:[
  {id:'dashboard', icon:'📊', label:'Dashboard'},
  {id:'patients', icon:'👥', label:'Patients', badge:'47'},
  {id:'documentation', icon:'📝', label:'AI Documentation', badge:''},
  {id:'compliance', icon:'🛡️', label:'Compliance Center'},
  {id:'scheduling', icon:'📅', label:'Scheduling'},
  {id:'billing', icon:'��', label:'Billing & RCM'}
 ]},
 {section:'ENGAGEMENT', items:[
  {id:'family', icon:'👨‍👩‍👧', label:'Family Portal'},
  {id:'dme', icon:'📦', label:'DME Management'}
 ]},
 {section:'PLATFORM', items:[
  {id:'pricing', icon:'💎', label:'Plans & Pricing'}
 ]}
];

var adminNav = [
 {section:'FINANCIALS', items:[
  {id:'admin-revenue', icon:'💰', label:'Revenue & Projections'},
  {id:'admin-analytics', icon:'📈', label:'Analytics & Growth'}
 ]},
 {section:'DATA & ML', items:[
  {id:'admin-harvester', icon:'��️', label:'Data Harvester', badge:'23'}
 ]},
 {section:'OPERATIONS', items:[
  {id:'admin-platform', icon:'🖥️', label:'Platform Health'}
 ]}
];

/* Page renderer map */
var pageMap = {
 'dashboard': function(){ return FrontPages.dashboard(); },
 'patients': function(){ return FrontPages.patients(); },
 'documentation': function(){ return FrontPages.documentation(); },
 'compliance': function(){ return FrontPages.compliance(); },
 'scheduling': function(){ return FrontPages.scheduling(); },
 'billing': function(){ return FrontPages.billing(); },
 'family': function(){ return FrontPages.familyPortal(); },
 'dme': function(){ return FrontPages.dme(); },
 'pricing': function(){ return FrontPages.pricing(); },
 'admin-revenue': function(){ return AdminPages.revenue(); },
 'admin-analytics': function(){ return AdminPages.analytics(); },
 'admin-harvester': function(){ return AdminPages.harvester(); },
 'admin-platform': function(){ return AdminPages.platform(); }
};

/* Page title map */
var titleMap = {
 'dashboard': 'Dashboard',
 'patients': 'Patient Management',
 'documentation': 'AI Documentation',
 'compliance': 'Compliance Center',
 'scheduling': 'Scheduling',
 'billing': 'Billing & RCM',
 'family': 'Family Portal',
 'dme': 'DME Management',
 'pricing': 'Plans & Pricing',
 'admin-revenue': 'Revenue & Projections',
 'admin-analytics': 'Analytics & Growth',
 'admin-harvester': 'Government Data Harvester',
 'admin-platform': 'Platform Health'
};

/* Render sidebar navigation */
function renderSidebar() {
 var nav = currentMode === 'admin' ? adminNav : frontNav;
 var html = '';
 nav.forEach(function(section) {
  html += '<div class="sidebar-section-title">' + section.section + '</div>';
  section.items.forEach(function(item) {
   var active = item.id === currentPage ? ' active' : '';
   var badge = item.badge ? '<span class="nav-badge">' + item.badge + '</span>' : '';
   html += '<button class="nav-item' + active + '" onclick="navigateTo(\'' + item.id + '\')">' +
    '<span class="nav-icon">' + item.icon + '</span>' +
    '<span>' + item.label + '</span>' +
    badge +
   '</button>';
  });
 });
 document.getElementById('sidebarNav').innerHTML = html;
}

/* Navigate to a page */
window.navigateTo = function(pageId) {
 if (!pageMap[pageId]) return;
 currentPage = pageId;
 document.getElementById('pageContainer').innerHTML = pageMap[pageId]();
 document.getElementById('pageTitle').textContent = titleMap[pageId] || pageId;
 renderSidebar();

 // Update chatbot context
 if (window.ChatBot) {
  ChatBot.currentPage = pageId;
  var ctx = document.getElementById('chatContextText');
  if (ctx) ctx.textContent = 'Watching: ' + (titleMap[pageId] || pageId);
 }

 // Close sidebar on mobile after nav
 if (window.innerWidth <= 768) {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
 }

 // Scroll to top
 window.scrollTo(0, 0);
};

/* Switch mode between front and admin */
window.switchMode = function(mode) {
 currentMode = mode;
 document.getElementById('modeFront').className = 'mode-btn' + (mode === 'front' ? ' active' : '');
 document.getElementById('modeAdmin').className = 'mode-btn' + (mode === 'admin' ? ' active' : '');

 // Update chatbot mode
 if (window.ChatBot) {
  ChatBot.currentMode = mode;
  ChatBot.messages = [];
  var msgs = document.getElementById('chatMessages');
  if (msgs) msgs.innerHTML = '';
  var botName = document.getElementById('chatBotName');
  if (botName) botName.textContent = mode === 'admin' ? 'Admin AI Assistant' : 'HospicePro Assistant';
  var chatInput = document.getElementById('chatInput');
  if (chatInput) chatInput.placeholder = mode === 'admin' ? 'Ask about revenue, growth, harvester...' : 'Ask me anything about hospice...';

  // Show notification for new context
  var notif = document.getElementById('chatNotif');
  var panel = document.getElementById('chatPanel');
  if (notif && !panel.classList.contains('open')) {
   notif.style.display = 'flex';
   notif.textContent = '!';
  }
 }

 // Navigate to first page in the mode
 var defaultPage = mode === 'admin' ? 'admin-revenue' : 'dashboard';
 navigateTo(defaultPage);
};

/* Toggle sidebar (mobile) */
window.toggleSidebar = function() {
 document.getElementById('sidebar').classList.toggle('open');
 document.getElementById('sidebarOverlay').classList.toggle('show');
};

/* Global search */
window.onGlobalSearch = function(query) {
 if (!query || query.length < 2) return;
 // Could implement search across pages, for now it's a visual feature
};

/* Show toast notification */
window.showToast = function(msg) {
 var toast = document.getElementById('toast');
 toast.textContent = msg;
 toast.classList.add('show');
 setTimeout(function() { toast.classList.remove('show'); }, 3500);
};

/* Trial modal */
window.showTrialModal = function() {
 document.getElementById('trialModal').classList.add('show');
};
window.closeTrialModal = function() {
 document.getElementById('trialModal').classList.remove('show');
};
window.submitTrial = function() {
 var name = document.getElementById('trialName').value;
 var email = document.getElementById('trialEmail').value;
 if (!name || !email) {
  showToast('⚠️ Please fill in your name and email');
  return;
 }
 closeTrialModal();
 showToast('🎉 Welcome ' + name + '! Your free trial has been activated.');
};

/* ===== INITIALIZE APP ===== */
document.addEventListener('DOMContentLoaded', function() {
 renderSidebar();
 navigateTo('dashboard');
});
