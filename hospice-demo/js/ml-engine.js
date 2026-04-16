/* ===== ML Engine — Simulated AI/ML for autocomplete, suggestions, etc. ===== */
window.MLEngine = {
  noteTemplates: {
    'pain': 'Patient reports pain level at [2-8]/10. Pain management plan reviewed. Current medications: [list medications]. Recommend [continue/adjust] current regimen. Next assessment scheduled per care plan.',
    'visit': 'Routine visit completed. Vital signs: BP [120/80], HR [72], RR [16], Temp [98.6°F], SpO2 [97%]. Patient is [alert and oriented / resting comfortably]. Caregiver [present/absent] during visit.',
    'symptom': 'Symptom assessment performed per California Title 22 §74659. Patient presents with [symptoms]. Comfort measures implemented: [list interventions]. IDG notified of changes in condition.',
    'medication': 'Medication reconciliation completed. Current medications reviewed with [patient/caregiver]. No adverse reactions noted. Controlled substance count verified per DEA regulations. Medications secured properly.',
    'spiritual': 'Spiritual care visit conducted. Patient expressed [feelings about end of life]. Chaplain provided emotional and spiritual support. Cultural preferences discussed and documented per CMS CoP §418.54.',
    'social': 'Social work assessment completed. Caregiver burden screening: [low/moderate/high]. Community resources discussed including [resources]. Advance directive status: [complete/in progress/declined].',
    'bereavement': 'Bereavement risk assessment performed using [tool name]. Risk level: [low/moderate/high]. Bereavement plan of care initiated per Medicare CoP §418.64(d). Follow-up scheduled for [date].',
    'admission': 'Initial assessment and admission completed. Patient meets hospice eligibility criteria per LCD guidelines. Primary diagnosis: [diagnosis]. Prognosis: 6 months or less if disease follows its normal course. Informed consent obtained. Bill of Rights provided per California HSC §1746.',
    'discharge': 'Discharge summary prepared. Reason for discharge: [revocation/no longer terminal/moved/transferred]. All medications and DME accounted for. Follow-up care plan provided to patient/family.',
    'gip': 'General Inpatient (GIP) level of care. Patient requires acute symptom management that cannot be managed in home setting. Symptoms requiring GIP: [list]. Treatment plan: [interventions]. Meets CMS criteria for GIP per §418.302(b)(4).'
  },
  complianceRules: {
    california: [
      {code:'DHCS-001',rule:'Initial RN assessment within 48 hours of admission',category:'Admission',severity:'critical'},
      {code:'DHCS-002',rule:'Comprehensive assessment within 5 days of election',category:'Assessment',severity:'critical'},
      {code:'T22-74659',rule:'Symptom management documented per Title 22 §74659',category:'Documentation',severity:'high'},
      {code:'HSC-1746',rule:'Hospice Bill of Rights provided to patient/family',category:'Patient Rights',severity:'critical'},
      {code:'HSC-1745',rule:'Written plan of care established before services begin',category:'Care Plan',severity:'critical'},
      {code:'DHCS-003',rule:'IDG meeting at least every 14 days',category:'Care Planning',severity:'high'},
      {code:'BPC-4170',rule:'Physician orders for controlled substances per BPC §4170',category:'Medications',severity:'critical'},
      {code:'CCR-70577',rule:'Staff-to-patient ratios per CCR §70577',category:'Staffing',severity:'high'},
      {code:'DHCS-004',rule:'Bereavement services offered for 13 months post-death',category:'Bereavement',severity:'medium'},
      {code:'HSC-1747',rule:'Complaint process disclosed per HSC §1747',category:'Patient Rights',severity:'medium'}
    ],
    federal: [
      {code:'CMS-418.52',rule:'Patient\'s rights: informed of rights and services',category:'Patient Rights',severity:'critical'},
      {code:'CMS-418.54',rule:'Initial and comprehensive assessment requirements',category:'Assessment',severity:'critical'},
      {code:'CMS-418.56',rule:'Plan of care must include all services required',category:'Care Plan',severity:'critical'},
      {code:'CMS-418.58',rule:'Quality assessment and performance improvement (QAPI)',category:'Quality',severity:'high'},
      {code:'CMS-418.64',rule:'Core services: nursing, physician, social work, counseling',category:'Services',severity:'critical'},
      {code:'CMS-418.76',rule:'Clinical records maintained for each patient',category:'Documentation',severity:'high'},
      {code:'CMS-418.100',rule:'Organization and administration requirements',category:'Administration',severity:'medium'},
      {code:'CMS-418.106',rule:'Drugs and biologicals: policies and procedures',category:'Medications',severity:'high'},
      {code:'CMS-418.110',rule:'Hospices providing inpatient care directly',category:'Inpatient',severity:'medium'},
      {code:'CMS-418.112',rule:'Hospices contracting with other facilities',category:'Contracts',severity:'medium'}
    ]
  },
  getSuggestion(text) {
    text = text.toLowerCase();
    for (const [key, template] of Object.entries(this.noteTemplates)) {
      if (text.includes(key) || (key === 'visit' && text.includes('routine')) || (key === 'admission' && text.includes('admit'))) {
        return template;
      }
    }
    if (text.length > 20) {
      return 'Continue documenting. Remember to include: assessment findings, interventions performed, patient/caregiver response, and plan for next visit. Ensure documentation meets CMS face-to-face requirements.';
    }
    return null;
  },
  searchRegs(query) {
    query = query.toLowerCase();
    const all = [...this.complianceRules.california.map(r => ({...r, jurisdiction:'California'})),
                 ...this.complianceRules.federal.map(r => ({...r, jurisdiction:'Federal (CMS)'}))];
    if (!query) return all;
    return all.filter(r => r.rule.toLowerCase().includes(query) || r.code.toLowerCase().includes(query) || r.category.toLowerCase().includes(query));
  }
};
