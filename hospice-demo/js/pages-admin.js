/* ===== ADMIN PAGES ===== */
window.AdminPages = {

 revenue() {
  return '<div class="page active" id="pg-admin-revenue">' +
   '<div class="section-header"><h2>💰 Revenue & Financial Projections</h2><p>1-year simulation — Platform operating as if fully live for 12 months</p></div>' +
   '<div class="explainer"><span class="ex-icon">📊</span><div><strong>Revenue Simulation.</strong> This dashboard shows projected financials as if HospicePro AI has been operating for 1 full year. Data is simulated based on realistic SaaS growth models for the hospice technology market. California-first launch with national expansion timeline included.</div></div>' +
   '<div class="grid-4" style="margin-bottom:24px">' +
    '<div class="stat-card"><div class="stat-num">$1.47M</div><div class="stat-label">Annual Revenue (ARR)</div><div class="stat-change up">↑ 340% YoY growth</div></div>' +
    '<div class="stat-card"><div class="stat-num green">$122K</div><div class="stat-label">Monthly Recurring (MRR)</div><div class="stat-change up">↑ 18% MoM avg</div></div>' +
    '<div class="stat-card"><div class="stat-num cyan">287</div><div class="stat-label">Active Subscribers</div><div class="stat-change up">↑ 22 this month</div></div>' +
    '<div class="stat-card"><div class="stat-num amber">2.1%</div><div class="stat-label">Monthly Churn</div><div class="stat-change up">↓ Improving</div></div>' +
   '</div>' +

   '<div class="explainer info"><span class="ex-icon">🤖</span><div><strong>AI Projection:</strong> At current growth rate (18% MoM), ARR will reach $3.2M by end of Year 2. Recommend increasing marketing spend in Q3 to capitalize on fall budgeting cycles at hospice agencies. California penetration at 4.2% of addressable market — significant room for growth.</div></div>' +

   '<div class="grid-2" style="margin-bottom:24px">' +
    '<div class="card"><div class="card-header"><span class="card-title">Monthly Revenue Growth (12-Month Sim)</span></div>' +
     '<div class="rev-row"><span class="rev-label">Month 1</span><div class="rev-track"><div class="rev-fill" style="width:8%;background:var(--purple)">$12K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 2</span><div class="rev-track"><div class="rev-fill" style="width:12%;background:var(--purple)">$18K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 3</span><div class="rev-track"><div class="rev-fill" style="width:18%;background:var(--purple)">$27K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 4</span><div class="rev-track"><div class="rev-fill" style="width:24%;background:var(--purple)">$36K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 5</span><div class="rev-track"><div class="rev-fill" style="width:32%;background:var(--purple)">$48K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 6</span><div class="rev-track"><div class="rev-fill" style="width:40%;background:var(--cyan)">$60K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 7</span><div class="rev-track"><div class="rev-fill" style="width:48%;background:var(--cyan)">$72K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 8</span><div class="rev-track"><div class="rev-fill" style="width:56%;background:var(--cyan)">$84K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 9</span><div class="rev-track"><div class="rev-fill" style="width:64%;background:var(--green)">$96K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 10</span><div class="rev-track"><div class="rev-fill" style="width:72%;background:var(--green)">$107K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 11</span><div class="rev-track"><div class="rev-fill" style="width:82%;background:var(--green)">$115K</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 12</span><div class="rev-track"><div class="rev-fill" style="width:100%;background:var(--green)">$122K</div></div></div>' +
    '</div>' +

    '<div class="card"><div class="card-header"><span class="card-title">Revenue by Plan Tier</span></div>' +
     '<div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Professional tier drives 58% of revenue. Enterprise adoption accelerating in Q3-Q4.</div></div>' +
     '<div style="text-align:center;margin-bottom:20px"><div style="font-size:48px;font-weight:900;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">$122K <span style="font-size:16px">MRR</span></div></div>' +
     '<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border);font-size:14px"><span>Starter ($199/mo)</span><div><span style="font-weight:700">124 subs</span> · <span style="color:var(--green)">$24,676</span></div></div>' +
     '<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border);font-size:14px"><span>Professional ($349/mo)</span><div><span style="font-weight:700">127 subs</span> · <span style="color:var(--green)">$44,323</span></div></div>' +
     '<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border);font-size:14px"><span>Enterprise ($599/mo)</span><div><span style="font-weight:700">36 subs</span> · <span style="color:var(--green)">$21,564</span></div></div>' +
     '<div style="display:flex;justify-content:space-between;padding:12px 0;font-size:14px"><span>Enterprise Custom</span><div><span style="font-weight:700">8 accounts</span> · <span style="color:var(--green)">$31,600</span></div></div>' +
     '<div class="explainer success" style="margin-top:16px;margin-bottom:0"><span class="ex-icon">📈</span><div><strong>Upsell Opportunity:</strong> 47 Starter subscribers have exceeded 25 patients. Auto-trigger upgrade prompt to Professional tier = potential +$7,050/mo revenue.</div></div>' +
    '</div>' +
   '</div>' +

   '<div class="card" style="margin-bottom:24px"><div class="card-header"><span class="card-title">Key Financial Metrics (Year 1 Summary)</span></div>' +
    '<div class="grid-4">' +
     '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border);text-align:center"><div style="font-size:12px;color:var(--text3);margin-bottom:4px">Customer LTV</div><div style="font-size:28px;font-weight:900;color:var(--green)">$14,280</div><div style="font-size:11px;color:var(--text2)">Avg 34-month retention</div></div>' +
     '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border);text-align:center"><div style="font-size:12px;color:var(--text3);margin-bottom:4px">CAC</div><div style="font-size:28px;font-weight:900;color:var(--amber)">$840</div><div style="font-size:11px;color:var(--text2)">LTV:CAC ratio 17:1</div></div>' +
     '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border);text-align:center"><div style="font-size:12px;color:var(--text3);margin-bottom:4px">Gross Margin</div><div style="font-size:28px;font-weight:900;color:var(--green)">82%</div><div style="font-size:11px;color:var(--text2)">SaaS best practice >70%</div></div>' +
     '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border);text-align:center"><div style="font-size:12px;color:var(--text3);margin-bottom:4px">Payback Period</div><div style="font-size:28px;font-weight:900;color:var(--cyan)">2.3 mo</div><div style="font-size:11px;color:var(--text2)">Recover CAC in 2.3 months</div></div>' +
    '</div>' +
   '</div>' +

   '<div class="explainer success"><span class="ex-icon">🚀</span><div><strong>Year 2 Projections:</strong> With planned national expansion (TX, FL, NY markets), projected ARR of $3.2M. If California penetration reaches 8%, that alone represents $2.1M ARR. Total addressable market for hospice tech: $4.8B nationally.</div></div>' +
  '</div>';
 },

 harvester() {
  return '<div class="page active" id="pg-admin-harvester">' +
   '<div class="section-header"><h2>🕷️ Government Data Harvester</h2><p>Automated daily crawling of public government sites for hospice regulatory intelligence</p></div>' +

   '<div class="explainer"><span class="ex-icon">🤖</span><div><strong>ML-Powered Data Harvester.</strong> This system automatically crawls 12+ public government websites daily to harvest hospice-related regulatory updates, policy changes, rate adjustments, and compliance requirements. Harvested data feeds into our ML models to keep the AI assistant and compliance engine current. All data sourced from public, freely available government publications.</div></div>' +

   '<div class="grid-4" style="margin-bottom:24px">' +
    '<div class="stat-card"><div class="stat-num">12</div><div class="stat-label">Active Sources</div><div class="stat-change up">All connected</div></div>' +
    '<div class="stat-card"><div class="stat-num green">4,847</div><div class="stat-label">Documents Harvested</div><div class="stat-change up">↑ 127 this week</div></div>' +
    '<div class="stat-card"><div class="stat-num cyan">23</div><div class="stat-label">New Updates Today</div><div class="stat-change up">↑ 8 flagged important</div></div>' +
    '<div class="stat-card"><div class="stat-num amber">99.2%</div><div class="stat-label">Crawl Success Rate</div><div class="stat-change up">Last 30 days</div></div>' +
   '</div>' +

   '<div class="explainer warn"><span class="ex-icon">🔔</span><div><strong>New Regulatory Alert!</strong> CMS published updated hospice payment rates effective April 1, 2026. Our harvester detected this change 4 hours after publication. ML models already updated. 3 compliance rules affected — see details in harvested data below.</div></div>' +

   '<div class="grid-2" style="margin-bottom:24px">' +
    '<div class="card">' +
     '<div class="card-header"><span class="card-title">🌐 Government Source Status</span><span class="badge-live">Live Monitoring</span></div>' +
     '<div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Each source is crawled at least once daily. Green = active and responding. Amber = slow response. Red = temporary error (auto-retry in 1 hour).</div></div>' +

     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">CMS.gov</div><div class="crawl-meta">Centers for Medicare & Medicaid Services · Last crawled: 2 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">1,247</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">California DHCS</div><div class="crawl-meta">Dept. of Health Care Services · Last crawled: 3 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">834</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">California CDPH</div><div class="crawl-meta">Dept. of Public Health · Last crawled: 4 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">612</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">Federal Register</div><div class="crawl-meta">federalregister.gov · Last crawled: 1 hour ago</div></div><div class="crawl-stats"><span class="crawl-count">423</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">HHS.gov</div><div class="crawl-meta">Dept. of Health & Human Services · Last crawled: 5 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">387</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">OIG (Office of Inspector General)</div><div class="crawl-meta">oig.hhs.gov · Last crawled: 6 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">298</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot stale"></span><div class="crawl-info"><div class="crawl-name">DEA.gov</div><div class="crawl-meta">Drug Enforcement Administration · Last crawled: 12 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">156</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">CDC.gov</div><div class="crawl-meta">Centers for Disease Control · Last crawled: 8 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">234</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">MedPAC</div><div class="crawl-meta">Medicare Payment Advisory Commission · Last crawled: 10 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">189</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">CA Legislative Info</div><div class="crawl-meta">leginfo.legislature.ca.gov · Last crawled: 4 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">267</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot live"></span><div class="crawl-info"><div class="crawl-name">Medicare.gov</div><div class="crawl-meta">Medicare beneficiary information · Last crawled: 3 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">145</span><span class="crawl-sub">documents</span></div></div>' +
     '<div class="crawl-source"><span class="crawl-dot error"></span><div class="crawl-info"><div class="crawl-name">NHPCO</div><div class="crawl-meta">National Hospice & Palliative Care Org · Last crawled: 24 hours ago</div></div><div class="crawl-stats"><span class="crawl-count">55</span><span class="crawl-sub">documents</span></div></div>' +
    '</div>' +

    '<div>' +
     '<div class="card" style="margin-bottom:20px">' +
      '<div class="card-header"><span class="card-title">🆕 Newly Updated Content (Last 24h)</span></div>' +
      '<div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Items flagged as NEW were detected as changed/added since last crawl. AI analyzes each for relevance and impact on compliance rules.</div></div>' +

      '<div class="harvest-item new"><div class="harvest-title">⚡ FY2026 Hospice Payment Rate Update</div><div class="harvest-source">Source: CMS.gov · Detected: 4 hours ago · <span class="tag tag-rose">HIGH IMPACT</span></div><div class="harvest-preview">CMS finalized hospice payment rates for FY2026. Routine Home Care: $216.45/day (↑2.8%). Continuous Home Care: $63.07/hr (↑2.8%). General Inpatient: $1,108.24/day (↑3.1%). Inpatient Respite: $481.24/day (↑2.6%). Wage index adjustments apply by CBSA.</div></div>' +

      '<div class="harvest-item new"><div class="harvest-title">⚡ California AB-1234: Hospice Telehealth Expansion</div><div class="harvest-source">Source: CA Legislative Info · Detected: 6 hours ago · <span class="tag tag-amber">MEDIUM IMPACT</span></div><div class="harvest-preview">New bill AB-1234 proposes expanding telehealth allowances for hospice visits. Would allow up to 20% of routine visits via telehealth with patient consent. Currently in committee review. Expected vote: June 2026.</div></div>' +

      '<div class="harvest-item new"><div class="harvest-title">⚡ OIG Report: Hospice Fraud Risk Areas 2026</div><div class="harvest-source">Source: OIG (oig.hhs.gov) · Detected: 8 hours ago · <span class="tag tag-amber">MEDIUM IMPACT</span></div><div class="harvest-preview">OIG identified top fraud risk areas: inappropriate GIP billing (32% of audited claims), long stays without recertification documentation (18%), and inadequate face-to-face encounters (15%).</div></div>' +

      '<div class="harvest-item"><div class="harvest-title">CDPH Updated Infection Control Guidelines</div><div class="harvest-source">Source: California CDPH · Detected: 12 hours ago · <span class="tag tag-blue">LOW IMPACT</span></div><div class="harvest-preview">Minor updates to infection control protocols for home-based hospice care. Added guidance on respiratory illness prevention during spring 2026 season.</div></div>' +

      '<div class="harvest-item"><div class="harvest-title">MedPAC March 2026 Report to Congress</div><div class="harvest-source">Source: MedPAC · Detected: 18 hours ago · <span class="tag tag-blue">LOW IMPACT</span></div><div class="harvest-preview">Annual report includes hospice chapter recommending Congress consider payment reforms for long-stay hospice patients. Suggests quality-based payment adjustments starting 2028.</div></div>' +
     '</div>' +

     '<div class="card">' +
      '<div class="card-header"><span class="card-title">🧠 ML Training Feed Status</span></div>' +
      '<div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Harvested data is processed, cleaned, and fed into our ML models to improve AI accuracy. This shows the pipeline status.</div></div>' +
      '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Documents in queue</span><span style="font-weight:700;color:var(--amber)">23</span></div>' +
      '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Processed today</span><span style="font-weight:700;color:var(--green)">127</span></div>' +
      '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Total in ML corpus</span><span style="font-weight:700;color:var(--cyan)">4,847</span></div>' +
      '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Model accuracy (compliance)</span><span style="font-weight:700;color:var(--green)">97.3%</span></div>' +
      '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Model accuracy (autocomplete)</span><span style="font-weight:700;color:var(--green)">94.8%</span></div>' +
      '<div style="display:flex;justify-content:space-between;padding:10px 0;font-size:13px"><span>Last model retrain</span><span style="font-weight:700">2 hours ago</span></div>' +
      '<div style="margin-top:16px"><button class="btn btn-sm btn-primary" onclick="showToast(\'🧠 Manual ML retrain initiated... ETA 15 minutes\')">🔄 Trigger Manual Retrain</button></div>' +
     '</div>' +
    '</div>' +
   '</div>' +

   '<div class="card" style="margin-bottom:24px">' +
    '<div class="card-header"><span class="card-title">📜 Crawl Activity Log</span><button class="btn btn-sm btn-outline" onclick="showToast(\'📋 Full log exported to CSV\')">Export Log</button></div>' +
    '<div class="log-window">' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 08:45:12]</span> <span class="log-ok">OK</span> CMS.gov crawl complete — 3 new documents detected</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 08:32:07]</span> <span class="log-ok">OK</span> Federal Register crawl complete — 1 new hospice-related rule found</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 07:15:33]</span> <span class="log-ok">OK</span> CA DHCS crawl complete — 2 updated documents</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 06:58:41]</span> <span class="log-ok">OK</span> CDPH crawl complete — 1 new infection control update</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 06:30:19]</span> <span class="log-ok">OK</span> HHS.gov crawl complete — no new documents</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 06:12:44]</span> <span class="log-ok">OK</span> OIG crawl complete — 1 new fraud alert report</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 05:45:02]</span> <span class="log-warn">WARN</span> DEA.gov slow response (12.3s) — retry successful</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 05:30:18]</span> <span class="log-ok">OK</span> CDC.gov crawl complete — no hospice-related updates</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 05:15:09]</span> <span class="log-ok">OK</span> MedPAC crawl complete — March report detected</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 04:58:33]</span> <span class="log-ok">OK</span> CA Legislature crawl complete — AB-1234 update detected</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 04:30:11]</span> <span class="log-ok">OK</span> Medicare.gov crawl complete — no changes</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 04:15:07]</span> <span class="log-err">ERR</span> NHPCO.org — Connection timeout (30s). Will retry in 1 hour.</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 03:00:00]</span> <span class="log-info">INFO</span> Daily crawl cycle initiated — 12 sources queued</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-16 02:55:00]</span> <span class="log-info">INFO</span> ML model retrain completed — accuracy: compliance 97.3%, autocomplete 94.8%</div>' +
     '<div class="log-entry"><span class="log-time">[2026-04-15 23:00:00]</span> <span class="log-info">INFO</span> Nightly ML retrain started — processing 127 new documents</div>' +
    '</div>' +
   '</div>' +

   '<div class="explainer success"><span class="ex-icon">💡</span><div><strong>Data Harvester Impact:</strong> In the last 30 days, the harvester detected 14 regulatory changes that affected compliance rules. 11 were automatically incorporated into the compliance engine within 4 hours of detection. 3 required human review (completed within 24 hours). This gives HospicePro AI users a significant advantage over competitors who update manually on quarterly cycles.</div></div>' +
  '</div>';
 },

 analytics() {
  return '<div class="page active" id="pg-admin-analytics">' +
   '<div class="section-header"><h2>📈 Platform Analytics & Growth</h2><p>Subscriber analytics, engagement metrics, and growth projections</p></div>' +
   '<div class="explainer"><span class="ex-icon">📊</span><div><strong>Platform Analytics.</strong> Comprehensive view of subscriber growth, engagement, feature adoption, and platform health. All metrics simulated for 1-year operational scenario. Use these insights to optimize product, marketing, and customer success strategies.</div></div>' +

   '<div class="grid-4" style="margin-bottom:24px">' +
    '<div class="stat-card"><div class="stat-num">287</div><div class="stat-label">Total Subscribers</div><div class="stat-change up">↑ 22 this month</div></div>' +
    '<div class="stat-card"><div class="stat-num green">89%</div><div class="stat-label">Feature Adoption</div><div class="stat-change up">↑ 4% MoM</div></div>' +
    '<div class="stat-card"><div class="stat-num cyan">4.7/5</div><div class="stat-label">NPS Score</div><div class="stat-change up">↑ 0.2 from Q3</div></div>' +
    '<div class="stat-card"><div class="stat-num amber">14 min</div><div class="stat-label">Avg Session Time</div><div class="stat-change up">↑ Highly engaged</div></div>' +
   '</div>' +

   '<div class="grid-2" style="margin-bottom:24px">' +
    '<div class="card"><div class="card-header"><span class="card-title">Subscriber Growth (12 Months)</span></div>' +
     '<div class="rev-row"><span class="rev-label">Month 1</span><div class="rev-track"><div class="rev-fill" style="width:7%;background:var(--purple)">18</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 2</span><div class="rev-track"><div class="rev-fill" style="width:11%;background:var(--purple)">32</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 3</span><div class="rev-track"><div class="rev-fill" style="width:17%;background:var(--purple)">48</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 4</span><div class="rev-track"><div class="rev-fill" style="width:24%;background:var(--purple)">68</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 5</span><div class="rev-track"><div class="rev-fill" style="width:32%;background:var(--cyan)">92</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 6</span><div class="rev-track"><div class="rev-fill" style="width:40%;background:var(--cyan)">115</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 7</span><div class="rev-track"><div class="rev-fill" style="width:50%;background:var(--cyan)">143</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 8</span><div class="rev-track"><div class="rev-fill" style="width:59%;background:var(--green)">169</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 9</span><div class="rev-track"><div class="rev-fill" style="width:69%;background:var(--green)">198</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 10</span><div class="rev-track"><div class="rev-fill" style="width:79%;background:var(--green)">227</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 11</span><div class="rev-track"><div class="rev-fill" style="width:90%;background:var(--green)">258</div></div></div>' +
     '<div class="rev-row"><span class="rev-label">Month 12</span><div class="rev-track"><div class="rev-fill" style="width:100%;background:var(--green)">287</div></div></div>' +
    '</div>' +

    '<div class="card"><div class="card-header"><span class="card-title">Feature Adoption Rates</span></div>' +
     '<div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>Shows what percentage of subscribers actively use each feature. Higher adoption = higher retention.</div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>AI Documentation</span><span style="font-weight:700">94%</span></div><div class="progress-bar"><div class="progress-fill" style="width:94%;background:var(--green)"></div></div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>Compliance Monitoring</span><span style="font-weight:700">91%</span></div><div class="progress-bar"><div class="progress-fill" style="width:91%;background:var(--green)"></div></div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>Visit Scheduling</span><span style="font-weight:700">88%</span></div><div class="progress-bar"><div class="progress-fill" style="width:88%;background:var(--green)"></div></div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>Billing & RCM</span><span style="font-weight:700">82%</span></div><div class="progress-bar"><div class="progress-fill" style="width:82%;background:var(--amber)"></div></div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>Family Portal</span><span style="font-weight:700">76%</span></div><div class="progress-bar"><div class="progress-fill" style="width:76%;background:var(--amber)"></div></div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>AI Chatbot</span><span style="font-weight:700">71%</span></div><div class="progress-bar"><div class="progress-fill" style="width:71%;background:var(--amber)"></div></div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>DME Management</span><span style="font-weight:700">68%</span></div><div class="progress-bar"><div class="progress-fill" style="width:68%;background:var(--amber)"></div></div></div>' +
     '<div class="compliance-item"><div class="compliance-label"><span>Route Optimization</span><span style="font-weight:700">64%</span></div><div class="progress-bar"><div class="progress-fill" style="width:64%;background:var(--amber)"></div></div></div>' +
    '</div>' +
   '</div>' +

   '<div class="card"><div class="card-header"><span class="card-title">Geographic Distribution (Year 1)</span></div>' +
    '<div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">ℹ️</span><div>California-first strategy with organic expansion. 78% of subscribers from CA in Year 1.</div></div>' +
    '<table class="data-table"><thead><tr><th>State</th><th>Subscribers</th><th>% of Total</th><th>MRR</th><th>Growth</th></tr></thead><tbody>' +
    '<tr><td style="font-weight:600">🐻 California</td><td>224</td><td>78%</td><td>$95,200</td><td><span class="tag tag-green">↑ 15%</span></td></tr>' +
    '<tr><td style="font-weight:600">⭐ Texas</td><td>18</td><td>6.3%</td><td>$7,650</td><td><span class="tag tag-green">↑ 32%</span></td></tr>' +
    '<tr><td style="font-weight:600">🌴 Florida</td><td>15</td><td>5.2%</td><td>$6,375</td><td><span class="tag tag-green">↑ 28%</span></td></tr>' +
    '<tr><td style="font-weight:600">🗽 New York</td><td>12</td><td>4.2%</td><td>$5,100</td><td><span class="tag tag-green">↑ 25%</span></td></tr>' +
    '<tr><td style="font-weight:600">🏔️ Arizona</td><td>8</td><td>2.8%</td><td>$3,400</td><td><span class="tag tag-green">↑ 40%</span></td></tr>' +
    '<tr><td style="font-weight:600">Other (6 states)</td><td>10</td><td>3.5%</td><td>$4,250</td><td><span class="tag tag-green">↑ 55%</span></td></tr>' +
    '</tbody></table>' +
   '</div>' +

   '<div class="explainer info" style="margin-top:24px"><span class="ex-icon">🎯</span><div><strong>Growth Strategy:</strong> Year 2 plan targets TX, FL, and NY with dedicated sales teams. Each state has 200+ licensed hospice agencies. At 5% penetration per state, this represents +180 subscribers and +$54K MRR. Total Year 2 target: 600 subscribers, $3.2M ARR.</div></div>' +
  '</div>';
 },

 platform() {
  return '<div class="page active" id="pg-admin-platform">' +
   '<div class="section-header"><h2>🖥️ Platform Health & Operations</h2><p>System uptime, performance, support metrics, and operational KPIs</p></div>' +
   '<div class="explainer"><span class="ex-icon">⚙️</span><div><strong>Platform Operations Dashboard.</strong> Monitor system health, API performance, support queue, and infrastructure metrics. All data simulated for 1-year operational scenario showing mature, production-grade platform performance.</div></div>' +

   '<div class="grid-4" style="margin-bottom:24px">' +
    '<div class="stat-card"><div class="stat-num green">99.97%</div><div class="stat-label">Uptime (12 mo)</div><div class="stat-change up">SLA: 99.9%</div></div>' +
    '<div class="stat-card"><div class="stat-num cyan">143ms</div><div class="stat-label">Avg API Response</div><div class="stat-change up">↓ 12ms improved</div></div>' +
    '<div class="stat-card"><div class="stat-num amber">4.2h</div><div class="stat-label">Avg Ticket Resolution</div><div class="stat-change up">↓ 1.8h improved</div></div>' +
    '<div class="stat-card"><div class="stat-num">98.4%</div><div class="stat-label">CSAT Score</div><div class="stat-change up">Excellent</div></div>' +
   '</div>' +

   '<div class="grid-2" style="margin-bottom:24px">' +
    '<div class="card"><div class="card-header"><span class="card-title">System Performance</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Web Application Response Time</span><span style="color:var(--green);font-weight:600">143ms avg</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Database Query Time</span><span style="color:var(--green);font-weight:600">23ms avg</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>ML Model Inference Time</span><span style="color:var(--green);font-weight:600">89ms avg</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>CDN Cache Hit Rate</span><span style="color:var(--green);font-weight:600">94.2%</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Error Rate (5xx)</span><span style="color:var(--green);font-weight:600">0.003%</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Concurrent Users (peak)</span><span style="font-weight:600">847</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;font-size:13px"><span>Daily Active Users</span><span style="font-weight:600">1,234</span></div>' +
    '</div>' +

    '<div class="card"><div class="card-header"><span class="card-title">Support Metrics</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Open Tickets</span><span style="color:var(--amber);font-weight:600">12</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Resolved This Week</span><span style="color:var(--green);font-weight:600">47</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Avg First Response</span><span style="color:var(--green);font-weight:600">18 min</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Avg Resolution Time</span><span style="color:var(--green);font-weight:600">4.2 hours</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Customer Satisfaction</span><span style="color:var(--green);font-weight:600">98.4%</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px"><span>Chatbot Deflection Rate</span><span style="color:var(--green);font-weight:600">67%</span></div>' +
     '<div style="display:flex;justify-content:space-between;padding:10px 0;font-size:13px"><span>Most Common Issue</span><span style="font-weight:600">Billing integration setup</span></div>' +
    '</div>' +
   '</div>' +

   '<div class="card"><div class="card-header"><span class="card-title">Infrastructure & Security</span></div>' +
    '<div class="explainer" style="margin-bottom:12px;padding:10px 14px"><span class="ex-icon">🔒</span><div>HIPAA-compliant infrastructure with SOC 2 Type II certification. All data encrypted at rest (AES-256) and in transit (TLS 1.3).</div></div>' +
    '<div class="grid-3">' +
     '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border)"><div style="font-weight:700;margin-bottom:8px">🔒 Security</div><div style="font-size:12px;color:var(--text2)"><div>HIPAA BAA: ✅ Active</div><div>SOC 2 Type II: ✅ Certified</div><div>Pen Test: ✅ Q1 2026</div><div>Data Encryption: AES-256</div></div></div>' +
     '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border)"><div style="font-weight:700;margin-bottom:8px">☁️ Infrastructure</div><div style="font-size:12px;color:var(--text2)"><div>Cloud: Gov-certified IaaS</div><div>Regions: US-West, US-East</div><div>DB: Multi-AZ Relational</div><div>CDN: Edge-cached delivery</div></div></div>' +
     '<div style="background:var(--bg);padding:16px;border-radius:10px;border:1px solid var(--border)"><div style="font-weight:700;margin-bottom:8px">📊 Compliance</div><div style="font-size:12px;color:var(--text2)"><div>HIPAA: Fully compliant</div><div>CA CMIA: Compliant</div><div>HITRUST: In progress</div><div>Last Audit: Mar 2026</div></div></div>' +
    '</div>' +
   '</div>' +
  '</div>';
 }
};
