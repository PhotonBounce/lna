/* ===== CHATBOT ENGINE ===== */
window.ChatBot = {
 currentMode: 'front',
 currentPage: 'dashboard',
 messages: [],
 typingTimeout: null,

 frontResponses: {
  'help': "I can help you with:\n• 📝 Clinical documentation & AI autocomplete\n• 🛡️ Compliance questions (CA & Federal)\n• 📅 Scheduling & route optimization\n• 💰 Billing & claims management\n• 👥 Patient care questions\n• 📦 DME orders & tracking\n\nJust ask me anything!",
  'pain': "For pain management documentation, I recommend:\n1. Use the 0-10 pain scale (FLACC for non-verbal patients)\n2. Document location, quality, duration, and aggravating/alleviating factors\n3. Include current pain medication regimen\n4. Note patient/caregiver response to interventions\n5. Per CA Title 22 §74659, symptom management must be documented at every visit.\n\n💡 Try our Pain Assessment template in Documentation!",
  'compliance': "Your current compliance score is 94% — Excellent! Here's a quick breakdown:\n• ✅ Patient Rights: 98%\n• ✅ Assessment & Care Planning: 95%\n• ✅ QAPI: 91%\n• ⚠️ Clinical Records: 88% (focus area)\n• ⚠️ CA Title 22: 85% (focus area)\n\nI recommend focusing on clinical records documentation to push your score above 96%. Would you like me to show you the specific gaps?",
  'billing': "Quick billing overview:\n• Monthly Revenue: $284K (↑8% MoM)\n• Clean Claim Rate: 96.2%\n• 2 claims flagged for potential denial\n• Medicare Cap: 72% utilized\n\n2026 CA Rates:\n• Routine: $216.45/day\n• Continuous: $63.07/hr\n• GIP: $1,108.24/day\n• Respite: $481.24/day\n\nNeed help with a specific claim?",
  'admit': "New admission checklist:\n1. ☐ Verify hospice eligibility (6-month prognosis)\n2. ☐ Obtain physician certification\n3. ☐ Patient election statement signed\n4. ☐ Bill of Rights provided (CA HSC §1746)\n5. ☐ Initial RN assessment within 48 hours\n6. ☐ Comprehensive assessment within 5 days\n7. ☐ Plan of care established\n8. ☐ DME orders placed\n9. ☐ Notify MAC for billing\n\nShall I open the Admission template?",
  'default': "I'm your HospicePro AI assistant! I can help with clinical documentation, compliance questions, scheduling, billing, and more. Try asking about:\n• Pain management documentation\n• Compliance requirements\n• Billing rates\n• Admission procedures\n• California regulations"
 },

 adminResponses: {
  'help': "Admin assistant here! I can help with:\n• 💰 Revenue projections & financial modeling\n• 📊 Subscriber analytics & growth metrics\n• 🕷️ Government data harvester status\n• 🖥️ Platform health & performance\n• 🎯 Go-to-market strategy insights\n\nWhat would you like to know?",
  'revenue': "Revenue Snapshot (Year 1 Simulation):\n• ARR: $1.47M (↑340% YoY)\n• MRR: $122K (↑18% MoM avg)\n• LTV: $14,280 per customer\n• CAC: $840 (LTV:CAC = 17:1)\n• Gross Margin: 82%\n\n📈 Year 2 Projection: $3.2M ARR with national expansion. California alone can reach $2.1M at 8% penetration.",
  'harvester': "Government Data Harvester Status:\n• 🟢 12 active sources monitored daily\n• 📄 4,847 total documents harvested\n• 🆕 23 new updates detected today\n• ✅ ML models retrained 2 hours ago\n\n⚡ Latest: CMS published FY2026 hospice payment rate updates 4 hours ago. Our system detected and incorporated changes automatically. Competitors won't reflect this for weeks.",
  'growth': "Growth Projections:\n• Current: 287 subscribers\n• Year 2 Target: 600 subscribers\n• Year 3 Target: 1,500 subscribers\n\nKey markets for expansion:\n1. Texas (200+ hospices) — 5% target = 10 subs\n2. Florida (180+ hospices) — 5% target = 9 subs  \n3. New York (160+ hospices) — 5% target = 8 subs\n\nCA penetration: 4.2% → target 8% by Year 2 end.",
  'default': "I'm your admin AI assistant! I can provide insights on revenue, growth projections, platform health, and the government data harvester. What area interests you?"
 },

 getResponse(input) {
  input = input.toLowerCase();
  var responses = this.currentMode === 'admin' ? this.adminResponses : this.frontResponses;

  for (var key in responses) {
   if (key !== 'default' && input.indexOf(key) >= 0) {
    return responses[key];
   }
  }

  // Context-aware responses based on current page
  if (this.currentMode === 'front') {
   if (this.currentPage === 'patients' && (input.indexOf('patient') >= 0 || input.indexOf('census') >= 0)) {
    return "Your current census is 47 active patients. 5 new admissions this month, 8 recertifications due in 30 days. 3 patients flagged as urgent. Would you like me to pull up details on any specific patient?";
   }
   if (this.currentPage === 'documentation') {
    return "I see you're in Documentation. Try typing keywords like 'pain', 'visit', 'medication', or 'admission' to trigger AI autocomplete. I can also help you understand CMS documentation requirements for any visit type.";
   }
   if (this.currentPage === 'scheduling') {
    return "Today's schedule shows 23 visits across 3 clinicians. 17 completed, 6 remaining. AI route optimization saved 7.3 miles and 18 minutes for Maria Santos today. Want me to find an open slot for an urgent visit?";
   }
  }

  if (this.currentMode === 'admin') {
   if (this.currentPage === 'admin-harvester') {
    return "The harvester is running smoothly! 12 government sources are being monitored. 23 new documents detected today, with 8 flagged as high-impact. The CMS payment rate update from 4 hours ago has already been incorporated into our ML models. Would you like to see the full crawl log?";
   }
   if (this.currentPage === 'admin-revenue') {
    return "Revenue is tracking above projections! MRR of $122K exceeds our Month 12 target of $110K by 11%. The Professional tier ($349/mo) is our strongest performer at 58% of revenue. I see 47 Starter subscribers who could be upsold — that's a $7,050/mo opportunity.";
   }
  }

  return responses['default'];
 },

 getTypingSuggestions(input) {
  if (!input || input.length < 2) return [];
  input = input.toLowerCase();

  var allSuggestions = this.currentMode === 'admin' ? [
   {match:'rev',text:'Show revenue breakdown'},
   {match:'grow',text:'Growth projections for Year 2'},
   {match:'harv',text:'Harvester status update'},
   {match:'sub',text:'Subscriber analytics'},
   {match:'churn',text:'What is our churn rate?'},
   {match:'plat',text:'Platform health check'},
   {match:'cost',text:'Customer acquisition cost'},
   {match:'ltv',text:'Customer lifetime value'},
   {match:'comp',text:'Competitor comparison'},
   {match:'cal',text:'California market penetration'}
  ] : [
   {match:'pain',text:'Pain management documentation tips'},
   {match:'comp',text:'Check my compliance score'},
   {match:'bill',text:'Billing rates and claim status'},
   {match:'admit',text:'New admission checklist'},
   {match:'med',text:'Medication reconciliation guide'},
   {match:'sched',text:'Today\'s visit schedule'},
   {match:'fam',text:'Family portal features'},
   {match:'dme',text:'DME order status'},
   {match:'reg',text:'California regulation lookup'},
   {match:'survey',text:'Survey readiness assessment'}
  ];

  return allSuggestions.filter(function(s) {
   return input.indexOf(s.match) >= 0 || s.match.indexOf(input) >= 0;
  }).slice(0, 3);
 }
};

/* ===== Chatbot UI Functions ===== */
window.toggleChat = function() {
 var panel = document.getElementById('chatPanel');
 var notif = document.getElementById('chatNotif');
 panel.classList.toggle('open');
 if (panel.classList.contains('open')) {
  notif.style.display = 'none';
  if (ChatBot.messages.length === 0) {
   addBotMessage(ChatBot.currentMode === 'admin'
    ? "�� Welcome to the Admin AI Assistant! I can help with revenue projections, subscriber analytics, the government data harvester, and platform operations. What would you like to explore?"
    : "👋 Welcome to HospicePro AI! I'm your intelligent assistant for hospice operations. I can help with documentation, compliance, scheduling, billing, and more. What can I help you with today?");
  }
 }
};

window.sendChat = function() {
 var input = document.getElementById('chatInput');
 var text = input.value.trim();
 if (!text) return;
 addUserMessage(text);
 input.value = '';
 clearSuggestions();

 // Simulate typing delay
 setTimeout(function() {
  var response = ChatBot.getResponse(text);
  addBotMessage(response);
 }, 600 + Math.random() * 800);
};

window.onChatTyping = function(value) {
 var ctx = document.getElementById('chatContext');
 var ctxText = document.getElementById('chatContextText');
 ctx.classList.add('visible');
 ctxText.textContent = 'Watching you type on: ' + ChatBot.currentPage;

 clearTimeout(ChatBot.typingTimeout);
 ChatBot.typingTimeout = setTimeout(function() {
  var suggestions = ChatBot.getTypingSuggestions(value);
  if (suggestions.length > 0) {
   showSuggestions(suggestions);
  } else {
   clearSuggestions();
  }
 }, 300);
};

function addBotMessage(text) {
 var msgs = document.getElementById('chatMessages');
 var div = document.createElement('div');
 div.className = 'chat-msg bot';
 div.innerHTML = text.replace(/\n/g, '<br>') + '<span class="msg-time">Just now</span>';
 msgs.appendChild(div);
 msgs.scrollTop = msgs.scrollHeight;
 ChatBot.messages.push({role:'bot',text:text});
}

function addUserMessage(text) {
 var msgs = document.getElementById('chatMessages');
 var div = document.createElement('div');
 div.className = 'chat-msg user';
 var textNode = document.createTextNode(text);
 div.appendChild(textNode);
 var timeSpan = document.createElement('span');
 timeSpan.className = 'msg-time';
 timeSpan.textContent = 'Just now';
 div.appendChild(timeSpan);
 msgs.appendChild(div);
 msgs.scrollTop = msgs.scrollHeight;
 ChatBot.messages.push({role:'user',text:text});
}

function showSuggestions(items) {
 clearSuggestions();
 var container = document.createElement('div');
 container.className = 'chat-suggestions';
 container.id = 'chatSuggestions';
 items.forEach(function(item) {
  var btn = document.createElement('button');
  btn.className = 'chat-suggestion';
  btn.textContent = item.text;
  btn.onclick = function() {
   document.getElementById('chatInput').value = item.text;
   sendChat();
  };
  container.appendChild(btn);
 });
 var inputArea = document.querySelector('.chat-input-area');
 inputArea.parentNode.insertBefore(container, inputArea);
}

function clearSuggestions() {
 var existing = document.getElementById('chatSuggestions');
 if (existing) existing.remove();
}
