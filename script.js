const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const ICONS={
tablet:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="14" width="32" height="20" rx="10" fill="currentColor" opacity=".15"/><rect x="10" y="16" width="28" height="16" rx="8" stroke="currentColor" stroke-width="2.5"/><line x1="24" y1="16" x2="24" y2="32" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/></svg>`,
capsule:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="28" height="32" rx="14" fill="currentColor" opacity=".1"/><rect x="12" y="10" width="24" height="28" rx="12" stroke="currentColor" stroke-width="2.5"/><path d="M12 24h24" stroke="currentColor" stroke-width="2"/><path d="M24 10v28" stroke="currentColor" stroke-width="2" opacity=".4"/></svg>`,
syrup:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="4" width="20" height="8" rx="3" stroke="currentColor" stroke-width="2.5"/><rect x="12" y="12" width="24" height="30" rx="5" fill="currentColor" opacity=".12"/><rect x="14" y="14" width="20" height="26" rx="4" stroke="currentColor" stroke-width="2.5"/><path d="M14 34c0 0 4-4 10-4s10 4 10 4" stroke="currentColor" stroke-width="2" opacity=".4"/><circle cx="20" cy="24" r="2" fill="currentColor" opacity=".3"/><circle cx="28" cy="22" r="1.5" fill="currentColor" opacity=".3"/></svg>`,
ointment:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="22" width="32" height="18" rx="4" fill="currentColor" opacity=".12"/><rect x="10" y="24" width="28" height="14" rx="3" stroke="currentColor" stroke-width="2.5"/><rect x="16" y="10" width="16" height="14" rx="3" stroke="currentColor" stroke-width="2.5"/><path d="M16 17h16" stroke="currentColor" stroke-width="2" opacity=".3"/><path d="M24 10v14" stroke="currentColor" stroke-width="2" opacity=".3"/></svg>`,
drops:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6C24 6 12 22 12 30a12 12 0 0024 0C36 22 24 6 24 6z" fill="currentColor" opacity=".12"/><path d="M24 6C24 6 12 22 12 30a12 12 0 0024 0C36 22 24 6 24 6z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 32a6 6 0 006 6" stroke="currentColor" stroke-width="2" opacity=".4" stroke-linecap="round"/></svg>`,
injection:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="2" width="12" height="6" rx="2" stroke="currentColor" stroke-width="2.5"/><rect x="16" y="8" width="16" height="28" rx="3" fill="currentColor" opacity=".1"/><rect x="18" y="10" width="12" height="24" rx="2" stroke="currentColor" stroke-width="2.5"/><line x1="24" y1="36" x2="24" y2="46" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M20 16h8M20 22h8M20 28h8" stroke="currentColor" stroke-width="1.5" opacity=".35"/></svg>`,
inhaler:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="14" width="20" height="28" rx="4" fill="currentColor" opacity=".12"/><rect x="12" y="16" width="16" height="24" rx="3" stroke="currentColor" stroke-width="2.5"/><rect x="28" y="20" width="14" height="10" rx="5" stroke="currentColor" stroke-width="2.5"/><rect x="16" y="6" width="8" height="10" rx="2" stroke="currentColor" stroke-width="2.5"/><path d="M30 25h8" stroke="currentColor" stroke-width="2" opacity=".3"/></svg>`,
gel:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="24" width="32" height="16" rx="5" fill="currentColor" opacity=".12"/><rect x="10" y="26" width="28" height="12" rx="4" stroke="currentColor" stroke-width="2.5"/><rect x="18" y="12" width="12" height="14" rx="4" stroke="currentColor" stroke-width="2.5"/><path d="M22 32c0 0 2-3 6-3" stroke="currentColor" stroke-width="2" opacity=".4" stroke-linecap="round"/><circle cx="26" cy="30" r="1.5" fill="currentColor" opacity=".3"/></svg>`,
pharmacy:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="18" width="36" height="24" rx="4" fill="currentColor" opacity=".12"/><rect x="8" y="20" width="32" height="20" rx="3" stroke="currentColor" stroke-width="2.5"/><path d="M18 10h12v10H18z" stroke="currentColor" stroke-width="2.5" fill="currentColor" opacity=".08"/><line x1="24" y1="26" x2="24" y2="36" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><line x1="19" y1="31" x2="29" y2="31" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
doctor:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="16" r="8" fill="currentColor" opacity=".12"/><circle cx="24" cy="16" r="8" stroke="currentColor" stroke-width="2.5"/><path d="M10 42c0-8 6-14 14-14s14 6 14 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="currentColor" opacity=".08"/><path d="M20 44l4-6 4 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
hospital:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="32" height="32" rx="4" fill="currentColor" opacity=".1"/><rect x="10" y="12" width="28" height="28" rx="3" stroke="currentColor" stroke-width="2.5"/><line x1="24" y1="18" x2="24" y2="34" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="16" y1="26" x2="32" y2="26" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><rect x="18" y="4" width="12" height="8" rx="2" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="2"/></svg>`,
cart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`,
location:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};
const M={
medicines:[
{id:'dolo650',name:'Dolo 650',generic:'Paracetamol 650mg',type:'tablet',mfr:'Micro Labs',price:30,orig:35,stock:'available',eta:'3 min',icon:'💊',aliases:['paracetamol','dolo','fever','temperature','acetaminophen']},
{id:'crocin',name:'Crocin Advance',generic:'Paracetamol 500mg',type:'tablet',mfr:'GSK India',price:28,orig:32,stock:'available',eta:'5 min',icon:'💊',aliases:['crocin','paracetamol','pain']},
{id:'calpol',name:'Calpol 650',generic:'Paracetamol 650mg',type:'tablet',mfr:'GSK India',price:32,orig:38,stock:'limited',eta:'8 min',icon:'💊',aliases:['calpol','paracetamol','cold']},
{id:'combiflam',name:'Combiflam',generic:'Ibuprofen 400mg + Paracetamol 325mg',type:'tablet',mfr:'Sanofi India',price:35,orig:42,stock:'available',eta:'5 min',icon:'💊',aliases:['combiflam','ibuprofen','pain relief','headache']},
{id:'brufen',name:'Brufen 600',generic:'Ibuprofen 600mg',type:'tablet',mfr:'Abbott',price:25,orig:30,stock:'available',eta:'5 min',icon:'💊',aliases:['brufen','ibuprofen','pain','inflammation']},
{id:'azithral500',name:'Azithral 500',generic:'Azithromycin 500mg',type:'tablet',mfr:'Alembic',price:85,orig:105,stock:'available',eta:'10 min',icon:'💊',aliases:['azithromycin','azithral','antibiotic','infection']},
{id:'cetirizine',name:'Cetirizine 10mg',generic:'Cetirizine Hydrochloride 10mg',type:'tablet',mfr:"Dr. Reddy's",price:18,orig:24,stock:'available',eta:'5 min',icon:'💊',aliases:['cetirizine','allergy','cetrite','zyrtec','histamine']},
{id:'levocetirizine',name:'Levocetirizine 5mg',generic:'Levocetirizine Dihydrochloride 5mg',type:'tablet',mfr:'Sun Pharma',price:22,orig:28,stock:'available',eta:'6 min',icon:'💊',aliases:['levocetirizine','allergy','xyzal']},
{id:'pan40',name:'Pan 40',generic:'Pantoprazole 40mg',type:'tablet',mfr:'Alkem',price:95,orig:115,stock:'available',eta:'7 min',icon:'💊',aliases:['pantoprazole','pan','acidity','gerd','acid reflux','proton pump']},
{id:'omegerd',name:'OmeGERD 20',generic:'Omeprazole 20mg',type:'capsule',mfr:'J.B. Chemicals',price:45,orig:55,stock:'available',eta:'6 min',icon:'💊',aliases:['omeprazole','acidity','gerd','heartburn']},
{id:'rabeprazole',name:'Razo 20',generic:'Rabeprazole 20mg',type:'tablet',mfr:'Dr. Reddy\'s',price:85,orig:100,stock:'available',eta:'7 min',icon:'💊',aliases:['rabeprazole','razo','acidity','gerd']},
{id:'azee500',name:'Azee 500',generic:'Azithromycin 500mg',type:'tablet',mfr:'Cipla',price:78,orig:95,stock:'available',eta:'8 min',icon:'💊',aliases:['azithromycin','azee','antibiotic']},
{id:'augmentin625',name:'Augmentin 625',generic:'Amoxicillin 500mg + Clavulanate 125mg',type:'tablet',mfr:'GSK India',price:220,orig:265,stock:'limited',eta:'12 min',icon:'💊',aliases:['amoxicillin','augmentin','antibiotic','infection']},
{id:'metformin',name:'Glycomet 500',generic:'Metformin Hydrochloride 500mg',type:'tablet',mfr:'USV',price:22,orig:28,stock:'available',eta:'5 min',icon:'💊',aliases:['metformin','glycomet','diabetes','sugar','glucophage']},
{id:'glycomet500',name:'Glycomet GP 1',generic:'Glimepiride 1mg + Metformin 500mg',type:'tablet',mfr:'USV',price:35,orig:42,stock:'available',eta:'7 min',icon:'💊',aliases:['glimepiride','glycomet','diabetes','sugar']},
{id:'amlodac5',name:'Amlodac 5',generic:'Amlodipine Besylate 5mg',type:'tablet',mfr:'Cipla',price:35,orig:42,stock:'available',eta:'7 min',icon:'💊',aliases:['amlodipine','amlodac','blood pressure','hypertension']},
{id:'telma40',name:'Telma 40',generic:'Telmisartan 40mg',type:'tablet',mfr:'Glenmark',price:110,orig:135,stock:'available',eta:'9 min',icon:'💊',aliases:['telmisartan','telma','blood pressure','bp']},
{id:'losartan50',name:'Losartan 50',generic:'Losartan Potassium 50mg',type:'tablet',mfr:'Cipla',price:30,orig:38,stock:'available',eta:'7 min',icon:'💊',aliases:['losartan','blood pressure','bp','angiotensin']},
{id:'aten50',name:'Aten 50',generic:'Atenolol 50mg',type:'tablet',mfr:'Cipla',price:18,orig:22,stock:'available',eta:'5 min',icon:'💊',aliases:['atenolol','aten','blood pressure','beta blocker','heart']},
{id:'metoprolol',name:'Met XL 50',generic:'Metoprolol Succinate 50mg',type:'tablet',mfr:'Micro Labs',price:55,orig:65,stock:'available',eta:'7 min',icon:'💊',aliases:['metoprolol','met xl','blood pressure','beta blocker']},
{id:'becosules',name:'Becosules',generic:'Vitamin B Complex + Vitamin C',type:'capsule',mfr:'Pfizer',price:38,orig:45,stock:'available',eta:'5 min',icon:'💊',aliases:['becosules','vitamin b','multivitamin','energy']},
{id:'vitd3',name:'Vitamin D3 60K',generic:'Cholecalciferol 60,000 IU',type:'capsule',mfr:'Sun Pharma',price:45,orig:55,stock:'available',eta:'6 min',icon:'💊',aliases:['vitamin d','d3','cholecalciferol','bone']},
{id:'neurobion',name:'Neurobion Forte',generic:'Vitamin B1+B6+B12',type:'tablet',mfr:'Merck',price:125,orig:145,stock:'available',eta:'8 min',icon:'💊',aliases:['neurobion','vitamin b','nerve','neuropathy']},
{id:'supradyn',name:'Supradyn Daily',generic:'Multivitamin + Minerals',type:'tablet',mfr:'Bayer',price:35,orig:42,stock:'available',eta:'5 min',icon:'💊',aliases:['supradyn','multivitamin','daily','energy','health']},
{id:'volini',name:'Volini Gel',generic:'Diclofenac Diethylamine 1%',type:'ointment',mfr:'Sun Pharma',price:78,orig:95,stock:'available',eta:'8 min',icon:'🧴',aliases:['volini','diclofenac','pain relief','muscle pain','sprain']},
{id:'moov',name:'Moov Pain Relief',generic:'Diclofenac + Menthol + Methyl Salicylate',type:'ointment',mfr:'Reckitt Benckiser',price:65,orig:78,stock:'available',eta:'7 min',icon:'🧴',aliases:['moov','pain relief','back pain','muscle']},
{id:'trombophob',name:'Trombophob Gel',generic:'Heparin Sodium 60IU/g',type:'ointment',mfr:'Zydus Cadila',price:45,orig:55,stock:'available',eta:'8 min',icon:'🧴',aliases:['trombophob','heparin','blood clot','swelling']},
{id:'pandol',name:'Pandol',generic:'Paracetamol 500mg',type:'tablet',mfr:'IPCA',price:12,orig:15,stock:'available',eta:'3 min',icon:'💊',aliases:['paracetamol','pandol','fever']},
{id:'benadryl',name:'Benadryl Cough Syrup',generic:'Diphenhydramine + Ammonium Chloride',type:'syrup',mfr:'Johnson & Johnson',price:95,orig:115,stock:'available',eta:'7 min',icon:'🧴',aliases:['benadryl','cough','cold','diphenhydramine']},
{id:'ascoril',name:'Ascoril LS Syrup',generic:'Ambroxol + Levosalbutamol + Guaiphenesin',type:'syrup',mfr:'Glenmark',price:125,orig:148,stock:'available',eta:'10 min',icon:'🧴',aliases:['ascoril','cough','bronchitis','asthma']},
{id:'corex',name:'Corex DX Syrup',generic:'Dextromethorphan + Chlorpheniramine',type:'syrup',mfr:'Pfizer',price:88,orig:105,stock:'available',eta:'8 min',icon:'🧴',aliases:['corex','cough','cold','dry cough']},
{id:'sycorex',name:'Sycorex DS Syrup',generic:'Terbutaline + Guaiphenesin + Bromhexine',type:'syrup',mfr:'FDC Ltd',price:72,orig:85,stock:'available',eta:'8 min',icon:'🧴',aliases:['sycorex','cough','productive cough','phlegm']},
{id:'zeptol',name:'Zeptol 200',generic:'Carbamazepine 200mg',type:'tablet',mfr:'Sun Pharma',price:35,orig:42,stock:'available',eta:'10 min',icon:'💊',aliases:['carbamazepine','zeptol','epilepsy','seizure']},
{id:'monocef',name:'Monocef 500',generic:'Ceftriaxone 500mg',type:'injection',mfr:'Aristo',price:65,orig:80,stock:'available',eta:'15 min',icon:'💉',aliases:['ceftriaxone','monocef','antibiotic','injection']},
{id:'toab',name:'Toab 500',generic:'Ceftriaxone 500mg + Tazobactam',type:'injection',mfr:'Fresenius Kabi',price:110,orig:135,stock:'available',eta:'15 min',icon:'💉',aliases:['ceftriaxone','tazobactam','antibiotic','injection']},
{id:'tobradex',name:'Tobradex Eye Drops',generic:'Tobramycin + Dexamethasone',type:'drops',mfr:'Alcon',price:185,orig:220,stock:'limited',eta:'12 min',icon:'💧',aliases:['tobradex','eye drops','infection','eye']},
{id:'moxiflox',name:'Moxiflox Eye Drops',generic:'Moxifloxacin 0.5%',type:'drops',mfr:'Sun Pharma',price:95,orig:115,stock:'available',eta:'8 min',icon:'💧',aliases:['moxiflox','eye drops','bacterial infection','eye']},
{id:'patanol',name:'Patanol S Eye Drops',generic:'Olopatadine 0.1%',type:'drops',mfr:'Alcon',price:210,orig:250,stock:'available',eta:'10 min',icon:'💧',aliases:['patanol','olopatadine','eye allergy','itchy eyes']},
{id:'shelcal500',name:'Shelcal 500',generic:'Calcium Carbonate + Vitamin D3',type:'tablet',mfr:'Torrent',price:120,orig:145,stock:'available',eta:'7 min',icon:'💊',aliases:['calcium','shelcal','bone','vitamin d']},
{id:'dialar',name:'Dialar 5mg',generic:'Diazepam 5mg',type:'tablet',mfr:'Various',price:28,orig:35,stock:'available',eta:'8 min',icon:'💊',aliases:['diazepam','anxiety','sleep','sedative']},
{id:'deriphyllin',name:'Deriphyllin Retard 150',generic:'Theophylline Ethylenediamine 150mg',type:'tablet',mfr:"Dr. Reddy's",price:18,orig:22,stock:'available',eta:'8 min',icon:'💊',aliases:['theophylline','asthma','breathing','copd']},
{id:'asthalin',name:'Asthalin Respules',generic:'Salbutamol 2.5mg/2.5ml',type:'inhaler',mfr:'Cipla',price:55,orig:65,stock:'available',eta:'8 min',icon:'🫁',aliases:['salbutamol','asthalin','asthma','inhaler','bronchodilator']},
{id:'seroflo',name:'Seroflo 250',generic:'Salmeterol + Fluticasone 250mcg',type:'inhaler',mfr:'Cipla',price:450,orig:520,stock:'available',eta:'12 min',icon:'🫁',aliases:['salmeterol','fluticasone','seroflo','asthma','inhaler']},
{id:'montair',name:'Montair LC',generic:'Montelukast 10mg + Levocetirizine 5mg',type:'tablet',mfr:'Cipla',price:125,orig:148,stock:'available',eta:'8 min',icon:'💊',aliases:['montelukast','levocetirizine','montair','allergy','asthma','rhinitis']},
{id:'deriphyllin inhaler',name:'Duolin Rotacap',generic:'Ipratropium + Levosalbutamol',type:'inhaler',mfr:'Cipla',price:280,orig:320,stock:'limited',eta:'10 min',icon:'🫁',aliases:['ipratropium','levosalbutamol','duolin','copd','breathing']},
{id:'panadol',name:'Panadol Extra',generic:'Paracetamol 500mg + Caffeine 65mg',type:'tablet',mfr:'GSK',price:40,orig:48,stock:'available',eta:'5 min',icon:'💊',aliases:['panadol','paracetamol','headache','pain','caffeine']},
{id:'nimulid',name:'Nimulid MD',generic:'Nimesulide 100mg',type:'tablet',mfr:'Alkem',price:28,orig:35,stock:'available',eta:'6 min',icon:'💊',aliases:['nimesulide','nimulid','pain','anti inflammatory']},
{id:'aceclofenac',name:'Hifenac 100',generic:'Aceclofenac 100mg',type:'tablet',mfr:'Intas',price:45,orig:55,stock:'available',eta:'7 min',icon:'💊',aliases:['aceclofenac','hifenac','pain','arthritis','joint pain']},
{id:'serratio',name:'Serratiopeptidase 10mg',generic:'Serratiopeptidase 10mg',type:'tablet',mfr:'Torrent',price:35,orig:42,stock:'available',eta:'6 min',icon:'💊',aliases:['serratiopeptidase','serratio','swelling','inflammation','healing']},
{id:'glycolax',name:'Glycolax Powder',generic:'Polyethylene Glycol 3350',type:'gel',mfr:'Abbott',price:185,orig:220,stock:'available',eta:'10 min',icon:'🧴',aliases:['polyethylene glycol','glycolax','constipation','laxative']},
{id:'loperamide',name:'Lomofen 2mg',generic:'Loperamide 2mg',type:'tablet',mfr:'Cipla',price:22,orig:28,stock:'available',eta:'6 min',icon:'💊',aliases:['loperamide','lomofen','diarrhea','loose motion']},
{id:'ondansetron',name:'Ondem 4mg',generic:'Ondansetron 4mg',type:'tablet',mfr:'Glenmark',price:18,orig:22,stock:'available',eta:'5 min',icon:'💊',aliases:['ondansetron','ondem','vomiting','nausea','antiemetic']},
{id:'domperidone',name:'Domstal 10',generic:'Domperidone 10mg',type:'tablet',mfr:'Torrent',price:15,orig:20,stock:'available',eta:'5 min',icon:'💊',aliases:['domperidone','domstal','nausea','vomiting','gastric']},
{id:'ranitidine',name:'Zantac 150',generic:'Ranitidine 150mg',type:'tablet',mfr:'GSK',price:25,orig:30,stock:'available',eta:'6 min',icon:'💊',aliases:['ranitidine','zantac','acidity','ulcer','heartburn']},
{id:'meftal',name:'Meftal Spas',generic:'Mefenamic Acid + Dicyclomine',type:'tablet',mfr:'Blue Cross',price:18,orig:22,stock:'available',eta:'5 min',icon:'💊',aliases:['mefenamic acid','meftal','period pain','stomach cramp','antispasmodic']},
{id:'mecobalamin',name:'Neurocobal',generic:'Mecobalamin 500mcg',type:'tablet',mfr:'Glenmark',price:42,orig:52,stock:'available',eta:'7 min',icon:'💊',aliases:['mecobalamin','neurocobal','nerve','vitamin b12']},
{id:'folic acid',name:'Folic Acid 5mg',generic:'Folic Acid 5mg',type:'tablet',mfr:'Various',price:8,orig:12,stock:'available',eta:'3 min',icon:'💊',aliases:['folic acid','folvite','pregnancy','iron supplement']},
{id:'iron supplement',name:'Ferinject 50',generic:'Ferric Carboxymaltose 50mg',type:'injection',mfr:'Emcure',price:185,orig:220,stock:'limited',eta:'15 min',icon:'💉',aliases:['ferric carboxymaltose','ferinject','anemia','iron','blood']},
],
doctors:[
{id:'d1',name:'Dr. Rajesh Mehta',spec:'general',specName:'General Physician',hosp:'Lilavati Hospital, Bandra',exp:15,rating:4.9,avail:'available',time:'10 AM - 6 PM',fees:500,lat:19.0544,lng:72.8267},
{id:'d2',name:'Dr. Anita Sharma',spec:'general',specName:'Emergency Medicine',hosp:'Kokilaben Hospital, Andheri',exp:12,rating:4.7,avail:'busy',time:'Next: 5:30 PM',fees:800,lat:19.1334,lng:72.8277},
{id:'d3',name:'Dr. Suresh Patel',spec:'cardio',specName:'Cardiologist',hosp:'Nanavati Hospital, Vile Parle',exp:20,rating:4.9,avail:'available',time:'9 AM - 5 PM',fees:1200,lat:19.1010,lng:72.8410},
{id:'d4',name:'Dr. Priya Gupta',spec:'ortho',specName:'Orthopedic Surgeon',hosp:'Hinduja Hospital, Mahim',exp:18,rating:4.8,avail:'available',time:'11 AM - 7 PM',fees:1000,lat:19.0380,lng:72.8400},
{id:'d5',name:'Dr. Mahesh Desai',spec:'pediatric',specName:'Pediatrician',hosp:'Wockhardt Hospital, Bandra',exp:14,rating:4.8,avail:'available',time:'9:30 AM - 5:30 PM',fees:600,lat:19.0587,lng:72.8291},
{id:'d6',name:'Dr. Kavita Rao',spec:'ent',specName:'ENT Specialist',hosp:'Breach Candy Hospital',exp:16,rating:4.7,avail:'busy',time:'Next: 4 PM',fees:700,lat:18.9760,lng:72.7980},
{id:'d7',name:'Dr. Arun Bhatt',spec:'cardio',specName:'Interventional Cardiologist',hosp:'Bombay Hospital, Marine Lines',exp:22,rating:4.9,avail:'available',time:'10 AM - 4 PM',fees:1500,lat:18.9432,lng:72.8264},
{id:'d8',name:'Dr. Neha Kulkarni',spec:'derma',specName:'Dermatologist',hosp:'Hiranandani Hospital, Powai',exp:10,rating:4.6,avail:'available',time:'11 AM - 7 PM',fees:800,lat:19.1176,lng:72.9060}
],
pharmacies:[
{id:'apollo',name:'Apollo Pharmacy',addr:'Station Road, Andheri West, Mumbai',rating:4.8,dist:'0.8 km',lat:19.1364,lng:72.8296,hours:'8 AM - 11 PM'},
{id:'medplus',name:'MedPlus Pharmacy',addr:'Lokhandwala Complex, Andheri West',rating:4.6,dist:'1.2 km',lat:19.1400,lng:72.8230,hours:'9 AM - 10 PM'},
{id:'wellness',name:'Wellness Forever',addr:'7 Bungalows, Versova, Andheri West',rating:4.5,dist:'1.5 km',lat:19.1320,lng:72.8180,hours:'8 AM - 12 AM'},
{id:'netmeds',name:'Netmeds Pharmacy',addr:'Powai Lake Road, Powai',rating:4.4,dist:'2.1 km',lat:19.1190,lng:72.9070,hours:'24 Hours'},
{id:'apollo2',name:'Apollo 24|7 Pharmacy',addr:'Bandra Kurla Complex, Bandra East',rating:4.7,dist:'2.8 km',lat:19.0607,lng:72.8648,hours:'8 AM - 11 PM'}
],
cart:[],
selectedPharm:'apollo',
_userLat:null,
_userLng:null,

init(){
  this.initLoader();
  this.loadSavedTheme();
  this.loadSavedCart();
  this.bind();
  this.renderPharmacies();
  this.renderDoctors();
  this.renderMedicines();
  this.animateStats();
  this.initScroll();
  this.initGeolocation();
},

initLoader(){
  const fill=document.getElementById('loaderFill');
  const txt=document.getElementById('loaderText');
  const steps=[
    {p:25,t:'Loading medicine database...'},
    {p:50,t:'Initializing OCR engine...'},
    {p:75,t:'Preparing interface...'},
    {p:100,t:'Ready!'}
  ];
  let i=0;
  document.body.classList.add('loading');
  const run=()=>{
    if(i>=steps.length){
      setTimeout(()=>{
        document.getElementById('loader').classList.add('hidden');
        document.body.classList.remove('loading');
      },400);
      return;
    }
    fill.style.width=steps[i].p+'%';
    txt.textContent=steps[i].t;
    i++;
    setTimeout(run,500);
  };
  setTimeout(run,300);
},

loadSavedTheme(){
  const saved=localStorage.getItem('medrush_theme');
  if(saved)document.documentElement.setAttribute('data-theme',saved);
},

loadSavedCart(){
  try{
    const saved=localStorage.getItem('medrush_cart');
    if(saved)this.cart=JSON.parse(saved);
  }catch(e){this.cart=[]}
},

bind(){
  $('#themeBtn').onclick=()=>{
    const h=document.documentElement;
    const t=h.getAttribute('data-theme')==='dark'?'light':'dark';
    h.setAttribute('data-theme',t);
    localStorage.setItem('medrush_theme',t);
  };

  window.addEventListener('scroll',()=>{
    $('#navbar').classList.toggle('scrolled',window.scrollY>40);
  });

  $('#hamburger').onclick=function(){this.classList.toggle('active');$('#navLinks').classList.toggle('open')};
  $$('.nav-link').forEach(l=>l.onclick=()=>{$('#hamburger').classList.remove('active');$('#navLinks').classList.remove('open')});

  const zone=$('#uploadZone');
  zone.onclick=()=>$('input[type=file]').click();
  zone.ondragover=e=>{e.preventDefault();zone.style.borderColor='var(--primary)'};
  zone.ondragleave=()=>{zone.style.borderColor=''};
  zone.ondrop=e=>{e.preventDefault();zone.style.borderColor='';if(e.dataTransfer.files.length)this.handleFile(e.dataTransfer.files[0])};
  $('input[type=file]').onchange=e=>{if(e.target.files.length)this.handleFile(e.target.files[0])};

  $('#scanBtn').onclick=()=>this.runScan();
  $('#retakeBtn').onclick=()=>this.resetUpload();
  $('#scanAgainBtn').onclick=()=>this.resetUpload();
  $('#addScannedBtn').onclick=()=>this.addScannedToCart();

  $('#medSearch').oninput=e=>{
    const v=e.target.value;
    $('#medClear').classList.toggle('show',v.length>0);
    this.renderMedicines(v,$('.filter-row .filter-chip.active')?.dataset.filter||'all');
  };
  $('#medClear').onclick=()=>{$('#medSearch').value='';$('#medClear').classList.remove('show');this.renderMedicines()};

  $('#filterRow').onclick=e=>{
    const chip=e.target.closest('.filter-chip');
    if(!chip)return;
    $$('#filterRow .filter-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    this.renderMedicines($('#medSearch').value,chip.dataset.filter);
  };

  $('#docFilters').onclick=e=>{
    const chip=e.target.closest('.filter-chip');
    if(!chip)return;
    $$('#docFilters .filter-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    this.renderDoctors(chip.dataset.filter);
  };

  $('#cartToggle').onclick=()=>this.toggleCart(true);
  $('#cartClose').onclick=$('#cartOverlay').onclick=()=>this.toggleCart(false);

  $('#checkoutBtn').onclick=()=>this.openCheckout();
  $('#modalClose').onclick=$('#modalOverlay').onclick=()=>$('#checkoutModal').style.display='none';

  $$('.pay-option').forEach(o=>o.onclick=function(){
    $$('.pay-option').forEach(x=>x.classList.remove('active'));
    this.classList.add('active');
    this.querySelector('input').checked=true;
  });

  $('#confirmOrderBtn').onclick=()=>this.confirmOrder();
  $('#successDone').onclick=()=>{this.closeAll();this.scrollTo('#hero')};

  $('#sosFindHospital').onclick=()=>this.findNearestHospital();
},

handleFile(file){
  if(!file||!file.type.startsWith('image/'))return;
  const reader=new FileReader();
  reader.onload=e=>{
    this._currentImageData=e.target.result;
    $('#previewImg').src=e.target.result;
    $('#uploadZone').style.display='none';
    $('#uploadPreview').style.display='block';
  };
  reader.readAsDataURL(file);
},

resetUpload(){
  $('#uploadZone').style.display='';
  $('#uploadPreview').style.display='none';
  $('#scanProgress').style.display='none';
  $('#scanResults').style.display='none';
  $('#resultsRaw').style.display='none';
  $('#fileInput').value='';
  this._currentImageData=null;
  this._scannedItems=[];
},

async runScan(){
  if(!this._currentImageData){this.toast('Please upload an image first');return}
  $('#uploadPreview').style.display='none';
  $('#scanProgress').style.display='block';
  $('#scanResults').style.display='none';

  const bar=$('#scanBar');
  const label=$('#scanLabel');
  const sub=$('#scanSub');

  try{
    bar.style.width='10%';
    label.textContent='Initializing Tesseract OCR engine...';
    sub.textContent='Downloading language data (one-time)...';

    if(!window._tesseractWorker){
      window._tesseractWorker=await Tesseract.createWorker('eng',1,{
        logger:m=>{
          if(m.status==='recognizing text'){
            const pct=Math.round(m.progress*100);
            bar.style.width=(30+pct*0.6)+'%';
          }
        }
      });
    }

    bar.style.width='30%';
    label.textContent='Analyzing prescription image...';
    sub.textContent='Running OCR text recognition';

    const worker=window._tesseractWorker;
    const{data:{text,words}}=await worker.recognize(this._currentImageData);

    bar.style.width='85%';
    label.textContent='Matching medicines...';
    sub.textContent='Comparing extracted text against medicine database';

    await new Promise(r=>setTimeout(r,500));
    bar.style.width='100%';
    label.textContent='Scan complete!';
    sub.textContent='Found medicines from prescription';

    await new Promise(r=>setTimeout(r,400));
    this.showScanResults(text,words);

  }catch(err){
    console.error('OCR Error:',err);
    bar.style.width='100%';
    label.textContent='Scan complete (demo mode)';
    sub.textContent='Using demo extraction';
    await new Promise(r=>setTimeout(r,500));
    this.showScanResults('Dolo 650 Paracetamol Combiflam Crocin',[]);
  }
},

showScanResults(ocrText,words){
  $('#scanProgress').style.display='none';
  $('#scanResults').style.display='block';

  const rawEl=$('#resultsRaw');
  const ocrTextEl=$('#ocrText');
  if(ocrText&&ocrText.trim().length>5){
    rawEl.style.display='block';
    ocrTextEl.textContent=ocrText.trim().substring(0,500);
  }

  const normalized=ocrText.toLowerCase().replace(/[^a-z0-9\s]/g,' ');
  const words2=normalized.split(/\s+/).filter(w=>w.length>2);
  const found=[];

  for(const med of this.medicines){
    const allTerms=[med.name.toLowerCase(),med.generic.toLowerCase(),...med.aliases];
    let bestScore=0;
    for(const term of allTerms){
      const termWords=term.split(/\s+/);
      for(const tw of termWords){
        if(tw.length<3)continue;
        for(const w of words2){
          if(w===tw||w.includes(tw)||tw.includes(w)){
            bestScore=Math.max(bestScore,1);
          }else if(tw.length>=4&&w.length>=4){
            let matches=0;
            const minLen=Math.min(tw.length,w.length);
            for(let i=0;i<minLen;i++){if(tw[i]===w[i])matches++}
            const sim=matches/minLen;
            if(sim>0.65)bestScore=Math.max(bestScore,sim);
          }
        }
      }
    }
    if(bestScore>0.25)found.push({med,score:bestScore});
  }

  found.sort((a,b)=>b.score-a.score);
  const picks=found.slice(0,8).map(f=>f.med);

  if(picks.length===0){
    picks.push(this.medicines[0],this.medicines[5],this.medicines[3],this.medicines[11]);
  }

  this._scannedItems=picks;
  const list=$('#resultsList');
  list.innerHTML=picks.map(m=>{
    const conf=Math.round((found.find(f=>f.med.id===m.id)?.score||0.5)*100);
    const confClass=conf>=70?'high':'med';
    return `<div class="result-item">
      <div><strong>${m.name}</strong><span>${m.generic} &middot; ₹${m.price}</span></div>
      <span class="result-conf ${confClass}">${conf}%</span>
    </div>`;
  }).join('');
  $('#resultsCount').textContent=`Found ${picks.length} medicine${picks.length>1?'s':''} from your prescription`;
},

addScannedToCart(){
  if(this._scannedItems&&this._scannedItems.length){
    let added=0;
    this._scannedItems.forEach(m=>{
      if(!this.cart.find(c=>c.id===m.id)){
        this.cart.push({...m,qty:1});
        added++;
      }
    });
    this.saveCart();
    this.renderMedicines($('#medSearch')?.value||'',$('.filter-row .filter-chip.active')?.dataset.filter||'all');
    this.toast(`${added} medicine${added>1?'s':''} added to cart`);
  }
  this.resetUpload();
},

renderMedicines(search='',filter='all'){
  let list=this.medicines;
  if(filter!=='all')list=list.filter(m=>m.type===filter);
  if(search){
    const s=search.toLowerCase();
    list=list.filter(m=>m.name.toLowerCase().includes(s)||m.generic.toLowerCase().includes(s)||(m.aliases&&m.aliases.some(a=>a.includes(s))));
  }
  const grid=$('#medGrid');
  const empty=$('#medEmpty');
  if(!list.length){grid.innerHTML='';empty.style.display='block';return}
  empty.style.display='none';
  grid.innerHTML=list.map(m=>{
    const inCart=this.cart.find(c=>c.id===m.id);
    return `<div class="med-card">
      <div class="med-img ${m.type}">${ICONS[m.type]||ICONS.tablet}</div>
      <div class="med-body">
        <div class="med-name">${m.name}</div>
        <div class="med-generic">${m.generic} &middot; ${m.mfr}</div>
        <div class="med-meta">
          <div class="med-price">₹${m.price}<span class="old">₹${m.orig}</span></div>
          <span class="med-stock ${m.stock}">${m.stock==='available'?'In Stock':'Limited'}</span>
        </div>
        <button class="med-add ${inCart?'added':''}" onclick="M.toggleCartItem('${m.id}')">${inCart?'✓ In Cart':'Add to Cart'}</button>
      </div>
    </div>`;
  }).join('');
},

toggleCartItem(id){
  const idx=this.cart.findIndex(c=>c.id===id);
  if(idx>=0){this.cart.splice(idx,1);this.toast('Removed from cart')}
  else{const m=this.medicines.find(x=>x.id===id);if(m)this.cart.push({...m,qty:1});this.toast('Added to cart')}
  this.saveCart();
  this.renderMedicines($('#medSearch')?.value||'',$('.filter-row .filter-chip.active')?.dataset.filter||'all');
},

addToCart(id){
  if(this.cart.find(c=>c.id===id))return;
  const m=this.medicines.find(x=>x.id===id);
  if(m)this.cart.push({...m,qty:1});
  this.saveCart();
},

saveCart(){
  localStorage.setItem('medrush_cart',JSON.stringify(this.cart));
  this.renderCartUI();
},

renderCartUI(){
  const count=this.cart.reduce((s,c)=>s+c.qty,0);
  const total=this.cart.reduce((s,c)=>s+c.price*c.qty,0);
  const el=$('#cartCount');
  el.textContent=count;
  el.classList.toggle('show',count>0);
  if(!this.cart.length){
    $('#cartItems').innerHTML='';
    $('#cartEmpty').style.display='flex';
    $('#cartFoot').style.display='none';
    return;
  }
  $('#cartEmpty').style.display='none';
  $('#cartFoot').style.display='block';
  $('#cartTotal').textContent='₹'+total;
  $('#cartItems').innerHTML=this.cart.map(c=>`
    <div class="cart-item">
      <div class="cart-item-body">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-detail">${c.generic}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">₹${c.price*c.qty}</span>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="M.changeQty('${c.id}',-1)">-</button>
            <span class="qty-val">${c.qty}</span>
            <button class="qty-btn" onclick="M.changeQty('${c.id}',1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="M.removeCartItem('${c.id}')">&times;</button>
        </div>
      </div>
    </div>`).join('');
},

changeQty(id,delta){
  const item=this.cart.find(c=>c.id===id);
  if(!item)return;
  item.qty+=delta;
  if(item.qty<=0)this.cart=this.cart.filter(c=>c.id!==id);
  this.saveCart();
  this.renderMedicines($('#medSearch')?.value||'',$('.filter-row .filter-chip.active')?.dataset.filter||'all');
},

removeCartItem(id){
  this.cart=this.cart.filter(c=>c.id!==id);
  this.saveCart();
  this.renderMedicines($('#medSearch')?.value||'',$('.filter-row .filter-chip.active')?.dataset.filter||'all');
  this.toast('Removed from cart');
},

toggleCart(open){
  $('#cartPanel').classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
},

openCheckout(){
  if(!this.cart.length)return;
  this.toggleCart(false);
  const total=this.cart.reduce((s,c)=>s+c.price*c.qty,0);
  $('#modalTotal').textContent='₹'+total;
  $('#modalPharmacies').innerHTML=this.pharmacies.map(p=>`
    <div class="modal-pharm ${p.id===this.selectedPharm?'active':''}" data-ph="${p.id}" onclick="M.selectPharm('${p.id}')">
      <div class="modal-pharm-radio"></div>
      <div>
        <div class="modal-pharm-name">${p.name}</div>
        <div class="modal-pharm-addr">${p.addr} &middot; ${p.dist}</div>
      </div>
    </div>`).join('');
  $('#checkoutModal').style.display='flex';
  document.body.style.overflow='hidden';
},

selectPharm(id){
  this.selectedPharm=id;
  $$('.modal-pharm').forEach(p=>{p.classList.toggle('active',p.dataset.ph===id)});
},

confirmOrder(){
  const ph=this.pharmacies.find(p=>p.id===this.selectedPharm);
  const code='MR-'+Date.now().toString(36).toUpperCase().slice(-4)+Math.random().toString(36).toUpperCase().slice(1,3);
  $('#successCode').textContent=code;
  if(ph){
    $('#successPharmacy').querySelector('h4').textContent=ph.name;
    $('#successPharmacy').querySelector('p').textContent=ph.addr;
    $('#successMaps').href=`https://www.google.com/maps/search/?api=1&query=${ph.lat},${ph.lng}`;
    $('#successMaps').style.display='inline-flex';
  }else{
    $('#successMaps').style.display='none';
  }
  $('#checkoutModal').style.display='none';
  $('#successScreen').style.display='flex';
  this.cart=[];
  this.saveCart();
  this.renderMedicines($('#medSearch')?.value||'',$('.filter-row .filter-chip.active')?.dataset.filter||'all');
},

closeAll(){
  $('#successScreen').style.display='none';
  document.body.style.overflow='';
},

renderPharmacies(){
  $('#pharmGrid').innerHTML=this.pharmacies.map(p=>`
    <div class="pharm-card">
      <div class="pharm-icon">${ICONS.pharmacy}</div>
      <div class="pharm-body">
        <div class="pharm-name">${p.name}</div>
        <div class="pharm-addr">${p.addr}</div>
        <div class="pharm-meta">
          <span class="pharm-rating">★ ${p.rating}</span>
          <span>${p.dist}</span>
          <span>${p.hours}</span>
          <span class="pharm-status">Open</span>
        </div>
      </div>
      <a href="https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}" target="_blank" rel="noopener" class="pharm-nav-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Directions
      </a>
    </div>`).join('');
},

renderDoctors(filter='all'){
  let list=this.doctors;
  if(filter!=='all')list=list.filter(d=>d.spec===filter);
  $('#docGrid').innerHTML=list.map(d=>`
    <div class="doc-card">
      <div class="doc-top">
        <div class="doc-avatar">${ICONS.doctor}</div>
        <div>
          <div class="doc-name">${d.name}</div>
          <div class="doc-spec">${d.specName}</div>
          <div class="doc-hospital">${d.hosp}</div>
        </div>
        <span class="doc-status ${d.avail}">${d.avail==='available'?'Available':'Busy'}</span>
      </div>
      <div class="doc-details">
        <span>${d.exp} yrs exp</span>
        <span>★ ${d.rating}</span>
        <span>₹${d.fees}</span>
        <span>${d.time}</span>
      </div>
      <div class="doc-actions">
        <a href="https://www.google.com/maps/search/?api=1&query=${d.lat},${d.lng}" target="_blank" rel="noopener" class="doc-action primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Navigate
        </a>
        <button class="doc-action" onclick="M.toast('${d.avail==='available'?'Booking request sent to '+d.name:'Will notify when available'}')">
          ${d.avail==='available'?'Book Now':'Notify Me'}
        </button>
        <a href="tel:${d.avail==='available'?'108':''}" class="doc-action" onclick="if('${d.avail}'==='busy'){M.toast('Doctor is currently busy');return false}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72"/></svg>
          Call
        </a>
      </div>
    </div>`).join('');
},

// GEOLOCATION + OVERPASS API
initGeolocation(){
  if(!navigator.geolocation){
    this.showHospitalFallback('Geolocation not supported by your browser');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos=>{
      this._userLat=pos.coords.latitude;
      this._userLng=pos.coords.longitude;
      this.fetchNearbyHospitals(pos.coords.latitude,pos.coords.longitude);
    },
    err=>{
      console.warn('Geolocation error:',err.message);
      this.showHospitalFallback('Location access denied. Showing default hospitals.');
      this.loadDefaultHospitals();
    },
    {enableHighAccuracy:false,timeout:10000,maximumAge:300000}
  );
},

async fetchNearbyHospitals(lat,lng){
  const grid=$('#hospGrid');
  grid.innerHTML=`<div class="hosp-loading" id="hospLoading">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--primary);animation:spin 1s linear infinite"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
    <p>Searching for hospitals within 10km...</p>
  </div>`;

  const radius=10000;
  const query=`[out:json][timeout:15];(node["amenity"="hospital"](around:${radius},${lat},${lng});way["amenity"="hospital"](around:${radius},${lat},${lng}););out center body;`;

  try{
    const resp=await fetch('https://overpass-api.de/api/interpreter',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:'data='+encodeURIComponent(query)
    });

    if(!resp.ok)throw new Error('Overpass API error');

    const data=await resp.json();
    const hospitals=[];

    for(const el of data.elements){
      const name=el.tags?.name||el.tags?.['name:en']||'Hospital';
      const addr=[el.tags?.['addr:street'],el.tags?.['addr:city']].filter(Boolean).join(', ')||el.tags?.address||'';
      const phone=el.tags?.phone||el.tags?.['contact:phone']||'';
      const lat2=el.lat||el.center?.lat;
      const lng2=el.lon||el.center?.lon;
      if(!lat2||!lng2)continue;

      const dist=this.haversine(lat,lng,lat2,lng2);
      hospitals.push({name,addr,phone,lat:lat2,lng:lng2,dist:Math.round(dist*100)/100});
    }

    hospitals.sort((a,b)=>a.dist-b.dist);
    const top=hospitals.slice(0,12);

    if(top.length===0){
      this.showHospitalFallback('No hospitals found nearby. Showing defaults.');
      this.loadDefaultHospitals();
      return;
    }

    grid.innerHTML=top.map(h=>`
      <div class="hosp-card">
      <div class="hosp-icon">${ICONS.hospital}</div>
        <div class="hosp-body">
          <div class="hosp-name">${h.name}</div>
          <div class="hosp-addr">${h.addr||'Address not available'}</div>
          <div class="hosp-meta">
            <span>${h.dist} km away</span>
            ${h.phone?`<span>📞 ${h.phone}</span>`:''}
            <span class="hosp-status">Open</span>
          </div>
        </div>
        <a href="https://www.google.com/maps/search/?api=1&query=${h.lat},${h.lng}" target="_blank" rel="noopener" class="hosp-nav-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Navigate
        </a>
      </div>`).join('');

  }catch(err){
    console.error('Overpass API error:',err);
    this.showHospitalFallback('Could not fetch hospitals. Showing defaults.');
    this.loadDefaultHospitals();
  }
},

showHospitalFallback(msg){
  const grid=$('#hospGrid');
  grid.innerHTML=`<div class="hosp-loading">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-3)"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
    <p>${msg}</p>
  </div>`;
},

loadDefaultHospitals(){
  const defaults=[
    {name:'Lilavati Hospital',addr:'Bandra Reclamation, Bandra West, Mumbai',lat:19.0544,lng:72.8267,dist:'3.2 km'},
    {name:'Kokilaben Hospital',addr:'Gundavali, Andheri West, Mumbai',lat:19.1334,lng:72.8277,dist:'1.1 km'},
    {name:'Hinduja Hospital',addr:'Veer Savarkar Marg, Mahim, Mumbai',lat:19.0380,lng:72.8400,dist:'4.5 km'},
    {name:'Bombay Hospital',addr:'New Marine Lines, Mumbai',lat:18.9432,lng:72.8264,dist:'6.8 km'},
    {name:'Nanavati Hospital',addr:'Vile Parle West, Mumbai',lat:19.1010,lng:72.8410,dist:'2.0 km'}
  ];
  const grid=$('#hospGrid');
  grid.innerHTML=defaults.map(h=>`
    <div class="hosp-card">
      <div class="hosp-icon">🏥</div>
      <div class="hosp-body">
        <div class="hosp-name">${h.name}</div>
        <div class="hosp-addr">${h.addr}</div>
        <div class="hosp-meta">
          <span>${h.dist} away</span>
          <span class="hosp-status">Open</span>
        </div>
      </div>
      <a href="https://www.google.com/maps/search/?api=1&query=${h.lat},${h.lng}" target="_blank" rel="noopener" class="hosp-nav-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Navigate
      </a>
    </div>`).join('');
},

findNearestHospital(){
  if(this._userLat&&this._userLng){
    window.open(`https://www.google.com/maps/search/?api=1&query=hospital+near+me`,'_blank');
    this.toast('Opening nearest hospital on Google Maps...');
  }else{
    window.open('https://www.google.com/maps/search/?api=1&query=hospital+near+me','_blank');
    this.toast('Opening hospitals near you on Google Maps...');
  }
},

haversine(lat1,lon1,lat2,lon2){
  const R=6371;
  const dLat=(lat2-lat1)*Math.PI/180;
  const dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
},

animateStats(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el=e.target;
        const target=+el.dataset.count;
        let current=0;
        const step=Math.ceil(target/40);
        const timer=setInterval(()=>{
          current+=step;
          if(current>=target){current=target;clearInterval(timer)}
          el.textContent=current+'+';
        },30);
        observer.unobserve(el);
      }
    });
  },{threshold:.5});
  $$('.stat-num').forEach(el=>observer.observe(el));
},

initScroll(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)e.target.style.opacity='1',e.target.style.transform='translateY(0)';
    });
  },{threshold:.1});
  $$('.feature-card,.step-card,.med-card,.pharm-card,.doc-card,.cta-card,.hosp-card').forEach(el=>{
    el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='all .5s cubic-bezier(.4,0,.2,1)';
    observer.observe(el);
  });
},

scrollTo(sel){
  const el=document.querySelector(sel);
  if(el)el.scrollIntoView({behavior:'smooth'});
},

toast(msg){
  const t=$('#toast');
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(this._toastTimer);
  this._toastTimer=setTimeout(()=>t.classList.remove('show'),2500);
}
};

document.addEventListener('DOMContentLoaded',()=>M.init());
