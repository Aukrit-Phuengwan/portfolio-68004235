(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const dictionary = {
  "th": {
    "skip": "ข้ามไปเนื้อหา",
    "navigation": "เมนูหลัก",
    "navAbout": "เกี่ยวกับฉัน",
    "navWork": "ผลงาน",
    "navSkills": "ทักษะ",
    "navExperience": "ประสบการณ์",
    "navContact": "ติดต่อ",
    "letsTalk": "ติดต่อ",
    "openMenu": "เปิดหรือปิดเมนู",
    "available": "ICT STUDENT · SRIPATUM UNIVERSITY",
    "heroTitle": "Portfolio",
    "hello": "สวัสดีครับ ผม",
    "viewWork": "ดูผลงาน",
    "getInTouch": "ติดต่อฉัน",
    "heroFootnote": "เรียนรู้ ลงมือทำ และเติบโตไปทีละโปรเจกต์",
    "heroArt": "บัตรแนะนำตัวอุกฤษฏ์ พึ่งหวาน นักศึกษา ICT มหาวิทยาลัยศรีปทุม",
    "aboutLabel": "ABOUT ME",
    "aboutTitle": "เกี่ยวกับฉัน",
    "aboutTag1": "ปวช. 1–3 · PSC",
    "aboutTag2": "นักศึกษา ICT · SPU",
    "aboutTag3": "กำลังเรียนรู้",
    "workTitle": "ผลงาน",
    "workDescription": "โครงงานเว็บไซต์ร้านชานมมีความสุข · ผลงานช่วง ปวช. ปี 3",
    "sampleWork": "ผลงานระหว่างเรียน",
    "filterProjects": "เลือกประเภทผลงาน",
    "allWork": "ทั้งหมด",
    "sampleNote": "มีความสุขเป็นผลงานจริงช่วง ปวช. ปี 3 ส่วนการ์ดที่ระบุว่ารอเพิ่มผลงานเป็นพื้นที่สำหรับโปรเจกต์ถัดไป",
    "skillsTitle": "ทักษะ",
    "skillsDescription": "มีประสบการณ์เพียงเล็กน้อยจากงานเรียนและโครงงาน ทักษะเหล่านี้อยู่ในระดับเริ่มต้น และกำลังฝึกฝนเพิ่มเติม",
    "experienceTitle": "ประสบการณ์",
    "experienceDescription": "ประสบการณ์เบื้องต้นจากโครงงานและงานฝึกระหว่างเรียน มีประสบการณ์เพียงเล็กน้อยและยังพัฒนาทักษะอย่างต่อเนื่อง",
    "resume": "ดู Resume",
    "resumeDownload": "ดาวน์โหลด Resume",
    "contactTitle": "ติดต่อ",
    "contactDescription": "ติดต่อเรื่องการเรียน งานฝึก หรือโครงงานได้ผ่านช่องทางด้านล่าง",
    "contactDescription2": "เลือกส่งอีเมลส่วนตัว อีเมลมหาวิทยาลัย หรือโทรศัพท์ได้ตามสะดวก",
    "contactPending": "อีเมลติดต่อจะอัปเดตเร็ว ๆ นี้",
    "socialPending": "ช่องทางเพิ่มเติมจะอัปเดตเร็ว ๆ นี้",
    "copyEmail": "คัดลอกอีเมล",
    "copied": "คัดลอกข้อมูลแล้ว",
    "copyFailed": "คัดลอกไม่สำเร็จ กรุณาเลือกและคัดลอกข้อมูลโดยตรง",
    "backTop": "กลับด้านบน",
    "copyright": "Student Portfolio",
    "close": "ปิดหน้าต่าง",
    "projectOpen": "ดูรายละเอียด",
    "role": "บทบาท",
    "outcome": "ผลลัพธ์",
    "tools": "เครื่องมือ",
    "challenge": "โจทย์และความท้าทาย",
    "approach": "วิธีคิดและกระบวนการ",
    "demo": "โครงสำหรับผลงาน",
    "live": "ทดลองใช้งาน",
    "externalDetail": "ดูรายละเอียดเพิ่มเติม",
    "projectDisclaimer": "นี่คือโครงสำหรับใส่ผลงานจริง ภาพและรายละเอียดที่ยังไม่ได้เพิ่มเป็นเพียงตัวอย่างของเทมเพลต",
    "resumeSample": "Resume นักศึกษา · ประสบการณ์เบื้องต้น",
    "resumePreview": "ดู Resume",
    "caseStudy": "รายละเอียดโปรเจกต์",
    "selectedWorkLabel": "โครงงาน ปวช. ปี 3",
    "printPdf": "บันทึกเป็น PDF",
    "summary": "แนะนำตัว",
    "workExperience": "ประสบการณ์และการศึกษา",
    "selectedProjects": "ผลงานที่เกี่ยวข้อง",
    "skills": "ทักษะ",
    "contact": "ติดต่อ",
    "resumeNote": "ทักษะและประสบการณ์จากงานเรียนและโครงงาน อยู่ในระดับเริ่มต้น",
    "metaDescription": "Portfolio ของอุกฤษฏ์ พึ่งหวาน รหัส 68004235 นักศึกษา ICT มหาวิทยาลัยศรีปทุม",
    "navHome": "หน้าแรก",
    "profileLabel": "STUDENT PROFILE",
    "studentLabel": "รหัสนักศึกษา",
    "profileUniversity": "มหาวิทยาลัยศรีปทุม",
    "profileFaculty": "ICT · นักศึกษา",
    "studentNote": "พื้นที่เล็ก ๆ สำหรับการเรียนรู้ของผม",
    "actualProject": "ผลงานจริง · โครงงานนักเรียน",
    "pendingProject": "รอเพิ่มผลงาน",
    "features": "ฟังก์ชันในโปรเจกต์",
    "viewHomepageImage": "ดูภาพหน้าแรกเต็ม",
    "projectPeriod": "ช่วงที่จัดทำ",
    "projectType": "ประเภทผลงาน",
    "projectTypeValue": "เว็บไซต์ร้านค้า · โครงงานนักเรียน",
    "galleryTitle": "ภาพฐานข้อมูลและเครื่องมือหลังบ้าน",
    "galleryIntro": "จากแผนผังความสัมพันธ์ของข้อมูล ไปยังหน้าจอจัดการตาราง และตัวอย่างการใช้งาน SQL เลือกภาพเพื่อเปิดดูขนาดเต็มได้",
    "galleryImages": "ภาพ",
    "galleryView": "ดูภาพขนาดเต็ม",
    "galleryJump": "ดูภาพฐานข้อมูลและหลังบ้าน",
    "educationTitle": "เส้นทางการศึกษา",
    "beginnerNote": "ประสบการณ์เบื้องต้น · กำลังฝึกฝน",
    "homeBackground": "พื้นฐานการศึกษา",
    "homeBackgroundValue": "ปวช. ปีที่ 1–3 · PSC",
    "homeLevel": "ประสบการณ์",
    "homeLevelValue": "ระดับเริ่มต้น · ยังฝึกฝนอยู่",
    "courseLabel": "รายวิชา",
    "portraitAlt": "รูปอุกฤษฏ์ พึ่งหวาน นักศึกษา ICT มหาวิทยาลัยศรีปทุม",
    "practiceProject": "ดูโครงงานที่เกี่ยวข้อง",
    "zipDownload": "ดาวน์โหลดไฟล์โครงงาน (.zip)",
    "zipLoading": "กำลังเตรียมไฟล์โครงงาน",
    "zipProgress": "กำลังดาวน์โหลด",
    "zipReady": "เตรียมไฟล์ ZIP แล้ว กรุณาตรวจสอบรายการดาวน์โหลดของเบราว์เซอร์",
    "zipError": "ดาวน์โหลดไม่สำเร็จ กรุณาลองอีกครั้ง",
    "zipContents": "โค้ด รูปภาพ และโครงสร้างฐานข้อมูล",
    "antigravityEvidence": "บันทึกการใช้ Google Antigravity",
    "universityEmail": "อีเมลมหาวิทยาลัย",
    "phoneLabel": "โทรศัพท์",
    "copyPhone": "คัดลอกเบอร์โทรศัพท์"
  },
  "en": {
    "skip": "Skip to content",
    "navigation": "Main navigation",
    "navAbout": "About",
    "navWork": "Projects",
    "navSkills": "Skills",
    "navExperience": "Experience",
    "navContact": "Contact",
    "letsTalk": "Contact",
    "openMenu": "Open or close menu",
    "available": "ICT STUDENT · SRIPATUM UNIVERSITY",
    "heroTitle": "Portfolio",
    "hello": "Hi, I’m",
    "viewWork": "View projects",
    "getInTouch": "Get in touch",
    "heroFootnote": "Learning, building, and growing. One project at a time.",
    "heroArt": "Student profile of Au-krit Phuengwan, ICT at Sripatum University",
    "aboutLabel": "ABOUT ME",
    "aboutTitle": "About me",
    "aboutTag1": "Vocational Years 1–3 · PSC",
    "aboutTag2": "ICT student · SPU",
    "aboutTag3": "Continuing to learn",
    "workTitle": "Projects",
    "workDescription": "Mee Khwam Sook milk tea website · Vocational Year 3 project",
    "sampleWork": "Student projects",
    "filterProjects": "Filter projects",
    "allWork": "All projects",
    "sampleNote": "Mee Khwam Sook is my vocational Year 3 project. Cards marked Coming soon are spaces for future projects.",
    "skillsTitle": "Skills",
    "skillsDescription": "I have limited experience from coursework and student projects. These skills are at a beginner level, and I am continuing to practise.",
    "experienceTitle": "Experience",
    "experienceDescription": "Introductory experience from student projects and coursework. My experience is limited, and I am continuing to build my skills.",
    "resume": "View resume",
    "resumeDownload": "Download resume",
    "contactTitle": "Contact",
    "contactDescription": "Get in touch about coursework, practice, or student projects.",
    "contactDescription2": "Use my personal email, university email, or phone number below.",
    "contactPending": "Contact email coming soon.",
    "socialPending": "More ways to connect coming soon.",
    "copyEmail": "Copy email address",
    "copied": "Contact copied",
    "copyFailed": "Copy failed. Please select and copy the contact directly.",
    "backTop": "Back to top",
    "copyright": "Student Portfolio",
    "close": "Close dialog",
    "projectOpen": "View case study",
    "role": "My role",
    "outcome": "The outcome",
    "tools": "The toolkit",
    "challenge": "The challenge",
    "approach": "The approach",
    "demo": "PROJECT PLACEHOLDER",
    "live": "View live project",
    "externalDetail": "Explore more",
    "projectDisclaimer": "This is a space for actual work. Images and unfilled details are illustrative template content.",
    "resumeSample": "Student resume · Beginner experience",
    "resumePreview": "Preview resume",
    "caseStudy": "PROJECT CASE STUDY",
    "selectedWorkLabel": "Vocational Year 3 project",
    "printPdf": "Save as PDF",
    "summary": "Profile",
    "workExperience": "Experience & Education",
    "selectedProjects": "Selected Projects",
    "skills": "Skills",
    "contact": "Contact",
    "resumeNote": "Skills and experience come from coursework and student projects and are at a beginner level.",
    "metaDescription": "Au-krit Phuengwan, student ID 68004235. ICT student at Sripatum University.",
    "navHome": "Home",
    "profileLabel": "STUDENT PROFILE",
    "studentLabel": "Student ID",
    "profileUniversity": "Sripatum University",
    "profileFaculty": "ICT · Student",
    "studentNote": "A little space for my learning journey.",
    "actualProject": "Student project",
    "pendingProject": "Coming soon",
    "features": "Project features",
    "viewHomepageImage": "View homepage image",
    "projectPeriod": "Project period",
    "projectType": "Project type",
    "projectTypeValue": "Storefront website · Student project",
    "galleryTitle": "Database design & administration tools",
    "galleryIntro": "Explore the relationship diagram, table management screen, and an example of SQL practice. Select any image to view the original in full.",
    "galleryImages": "IMAGES",
    "galleryView": "View full image",
    "galleryJump": "Explore database images",
    "educationTitle": "My education",
    "beginnerNote": "Beginner experience · Still learning",
    "homeBackground": "Education background",
    "homeBackgroundValue": "Vocational Years 1–3 · PSC",
    "homeLevel": "Experience",
    "homeLevelValue": "Beginner · Still practising",
    "courseLabel": "Course",
    "portraitAlt": "Portrait of Au-krit Phuengwan, ICT student at Sripatum University",
    "practiceProject": "View the related project",
    "zipDownload": "Download project source (.zip)",
    "zipLoading": "Preparing project download",
    "zipProgress": "Downloading",
    "zipReady": "ZIP is ready. Check your browser downloads.",
    "zipError": "Download failed. Please try again.",
    "zipContents": "Source, images & database structure",
    "antigravityEvidence": "Google Antigravity development notes",
    "universityEmail": "University email",
    "phoneLabel": "Phone",
    "copyPhone": "Copy phone number"
  }
};
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;
  const local = (value) => typeof value === 'object' && value !== null ? (value[language] ?? value.th ?? value.en ?? '') : value;
  const t = (key) => dictionary[language][key] ?? key;
  // Only allow web URLs or local assets. Unconfigured links are omitted.
  const safeUrl = (value) => {
    if (!value || typeof value !== 'string') return null;
    try { const url = new URL(value, document.baseURI); return ['https:', 'http:'].includes(url.protocol) || (url.protocol === 'file:' && !/^[a-z]+:/i.test(value)) ? value : null; } catch { return null; }
  };
  let language = 'th';
  try { const saved = localStorage.getItem('portfolio-language'); if (['th','en'].includes(saved)) language = saved; } catch {}
  const requested = new URLSearchParams(location.search).get('lang');
  if (['th','en'].includes(requested)) language = requested;
  let filter = 'all';
  let currentProject = null;
  let lastFocused = null;
  let toastTimer;



  function renderProjectGallery(chapter) {
    if (!chapter.gallery?.length) return '';
    return `<div class="case-gallery" id="project-gallery" aria-labelledby="gallery-heading">
      <div class="case-gallery-heading"><div><p class="case-kicker">DATABASE / BEHIND THE SCENES</p><h4 id="gallery-heading">${t('galleryTitle')}</h4></div><span class="case-gallery-count">${String(chapter.gallery.length).padStart(2,'0')} / ${t('galleryImages')}</span></div>
      <p class="case-gallery-intro">${t('galleryIntro')}</p>
      <div class="case-gallery-grid">${chapter.gallery.map((picture,index)=>`
        <figure class="case-gallery-item ${index === 0 ? 'case-gallery-featured' : ''}">
          <a class="case-gallery-image" href="${escape(safeUrl(picture.source))}" target="_blank" rel="noopener noreferrer" aria-label="${escape(t('galleryView') + ': ' + local(picture.title))}">
            <img src="${escape(safeUrl(picture.source))}" alt="${escape(local(picture.alt))}" width="${picture.width}" height="${picture.height}" loading="lazy" decoding="async">
          </a>
          <figcaption><div class="case-gallery-meta"><span>${escape(local(picture.label))}</span><span>${String(index+1).padStart(2,'0')}</span></div><h5>${escape(local(picture.title))}</h5><p>${escape(local(picture.description))}</p><a class="case-gallery-link" href="${escape(safeUrl(picture.source))}" target="_blank" rel="noopener noreferrer">${t('galleryView')}${icon('arrow-up-right')}</a></figcaption>
        </figure>`).join('')}</div>
    </div>`;
  }

  function renderProjects() {
    const project = data.projects[0];
    const host = $('#project-feature');
    if (!host || !project) return;
    const title = language === 'en' ? (project.nameEn || project.name) : project.name;
    host.innerHTML = `
      <article class="case-study" aria-labelledby="featured-project-title">
        <header class="case-cover">
          <div class="case-cover-copy">
            <p class="case-kicker">01 / STUDENT WEB PROJECT</p>
            <h3 id="featured-project-title">${escape(title)}</h3>
            <p class="case-description">${escape(local(project.description))}</p>
            <div class="tool-tags">${project.tools.map(tool=>`<span>${escape(tool)}</span>`).join('')}</div>
            ${project.caseStudy?.some(chapter=>chapter.gallery?.length) ? `<button type="button" class="case-gallery-jump" data-show-gallery>${t('galleryJump')}${icon('arrow-right')}</button>` : ''}
          </div>
          <figure class="case-screenshot">
            <a href="${escape(safeUrl(project.image))}" target="_blank" rel="noopener noreferrer" aria-label="${t('viewHomepageImage')}"><img src="${escape(safeUrl(project.image))}" alt="${escape(local(project.alt))}" width="1905" height="938" decoding="async"></a>
            <figcaption>${escape(local(project.imageCaption))}<a href="${escape(safeUrl(project.image))}" target="_blank" rel="noopener noreferrer">${t('viewHomepageImage')}${icon('arrow-up-right')}</a></figcaption>
          </figure>
        </header>
        <dl class="case-facts">
          <div><dt>${t('projectPeriod')}</dt><dd>${escape(local(project.year))}</dd></div>
          <div><dt>${t('projectType')}</dt><dd>${t('projectTypeValue')}</dd></div>
          <div><dt>${t('role')}</dt><dd>${escape(local(project.role))}</dd></div>
        </dl>
        <div class="case-chapters">
          ${(project.caseStudy || []).map((chapter,index)=>`
            <section class="case-chapter" aria-labelledby="chapter-${escape(chapter.id)}">
              <div class="case-chapter-heading"><span class="case-chapter-number">${String(index+1).padStart(2,'0')}</span><h3 id="chapter-${escape(chapter.id)}">${escape(local(chapter.title))}</h3></div>
              <div class="case-chapter-content">
                ${(chapter.intro || []).map(paragraph=>`<p class="case-paragraph">${escape(local(paragraph))}</p>`).join('')}
                ${chapter.items?.length ? chapter.layout === 'stack'
                  ? `<dl class="case-stack">${chapter.items.map(part=>`<div><dt>${escape(local(part.title))}</dt><dd>${escape(local(part.body))}</dd></div>`).join('')}</dl>`
                  : `<${chapter.layout==='steps'?'ol':'ul'} class="case-items case-${escape(chapter.layout)}">${chapter.items.map(part=>`<li><h4>${escape(local(part.title))}</h4><p>${escape(local(part.body))}</p></li>`).join('')}</${chapter.layout==='steps'?'ol':'ul'}>`
                  : ''}
                ${renderProjectGallery(chapter)}
              </div>
            </section>`).join('')}
          <section class="case-result"><p class="case-kicker">PROJECT OUTCOME</p><h3>${t('outcome')}</h3><p>${escape(local(project.result))}</p><p class="case-status-note">${escape(local(project.previewNote))}</p></section>
        </div>
      </article>`;
  }


  function renderEducation() {
    const host = $('#education-list');
    if (!host) return;
    host.innerHTML = (data.education || []).map((item,index)=>`<article class="education-card"><p class="education-period"><span>${String(index+1).padStart(2,'0')}</span>${escape(local(item.period))}</p><h4>${escape(local(item.title))}</h4><p class="education-school">${escape(local(item.organization))}</p><p class="education-description">${escape(local(item.description))}</p></article>`).join('');
    if ($('#home-course-name')) $('#home-course-name').textContent = local(data.course?.name);
  }


  function renderSkills() {
    $('#skills-list').innerHTML = data.skills.map(skill => `<article class="skill-row"><span class="skill-number">${escape(skill.number)}</span><div><div class="skill-heading"><h3>${escape(local(skill.title))}</h3><span class="skill-level">${escape(local(skill.level))}</span></div><p>${escape(local(skill.description))}</p><div class="tool-tags">${skill.tools.map(tool=>`<span>${escape(tool)}</span>`).join('')}</div>${data.projects.some(project=>project.id===skill.project) ? `<button class="skill-project-link" data-project="${escape(skill.project)}">${escape(local(skill.link))}${icon('arrow-up-right')}</button>` : ''}</div></article>`).join('');
  }



  let projectDownloadActive = false;
  let projectDownloadPhase = '';
  let projectDownloadPercent = 0;
  function renderDownloadState() {
    document.querySelectorAll('[data-download-project]').forEach(button=>{
      button.disabled=projectDownloadActive;
      button.setAttribute('aria-busy',String(projectDownloadActive));
      button.querySelector('span').textContent=t(projectDownloadActive ? 'zipLoading' : 'zipDownload');
    });
    document.querySelectorAll('[data-download-status]').forEach(status=>{
      status.textContent=projectDownloadPhase==='loading' ? t('zipProgress')+' '+projectDownloadPercent+'%' : projectDownloadPhase==='ready' ? t('zipReady') : projectDownloadPhase==='error' ? t('zipError') : '';
    });
  }
  function projectDownloadButton(projectId) {
    const project=data.projects.find(project=>project.id===projectId);
    if(!project?.sourceDownload) return '';
    return `<div class="project-source-download"><button type="button" class="button button-outline project-download-button" data-download-project="${escape(project.id)}">${icon('download')}<span>${t('zipDownload')}</span></button><p class="project-download-info">ZIP · ${(project.sourceDownload.bytes/1024/1024).toFixed(1)} MB · ${t('zipContents')}</p><p class="project-download-status" data-download-status role="status" aria-live="polite"></p></div>`;
  }
  async function downloadProject(projectId) {
    const download=data.projects.find(project=>project.id===projectId)?.sourceDownload;
    if(!download || projectDownloadActive) return;
    projectDownloadActive=true;projectDownloadPhase='loading';projectDownloadPercent=0;renderDownloadState();
    try {
      const response=await fetch(download.manifest);
      if(!response.ok) throw new Error('Manifest unavailable');
      const manifest=await response.json();
      if(!Array.isArray(manifest.parts) || !manifest.parts.length || manifest.bytes!==download.bytes) throw new Error('Invalid package');
      const buffers=[];let received=0;
      for(const part of manifest.parts) {
        const url=new URL(part.url,document.baseURI);
        if(url.origin!==location.origin) throw new Error('Invalid part origin');
        const response=await fetch(url.href);
        if(!response.ok) throw new Error('Part unavailable');
        const bytes=await response.arrayBuffer();
        if(bytes.byteLength!==part.bytes) throw new Error('Incomplete part');
        const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),byte=>byte.toString(16).padStart(2,'0')).join('');
        if(hash!==part.sha256) throw new Error('Package verification failed');
        buffers.push(bytes);received+=bytes.byteLength;
        projectDownloadPercent=Math.round(received/manifest.bytes*100);renderDownloadState();
      }
      if(received!==manifest.bytes) throw new Error('Incomplete package');
      const blob=new Blob(buffers,{type:'application/zip'});
      const url=URL.createObjectURL(blob),link=document.createElement('a');
      link.href=url;link.download=download.fileName;document.body.append(link);link.click();link.remove();
      setTimeout(()=>URL.revokeObjectURL(url),60000);
      projectDownloadPhase='ready';
    } catch(error) {
      projectDownloadPhase='error';
    } finally {
      projectDownloadActive=false;renderDownloadState();
    }
  }

  function renderTimeline() {
    $('#timeline').innerHTML = data.experience.map(item=>`<article class="timeline-item"><p class="timeline-period">${escape(local(item.period))}</p><h3>${escape(local(item.title))}</h3><p class="timeline-organization">${escape(local(item.organization))}</p><p class="timeline-description">${escape(local(item.description))}</p>${item.project ? projectDownloadButton(item.project) : ''}</article>`).join('');
    renderDownloadState();
  }


  function renderContact() {
    const validEmail=value=>typeof value==='string' && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);
    const methods=[];
    if(validEmail(data.email)) methods.push({label:'Gmail',value:data.email,href:'mailto:'+data.email,copyLabel:t('copyEmail')+' Gmail'});
    if(validEmail(data.universityEmail)) methods.push({label:t('universityEmail'),value:data.universityEmail,href:'mailto:'+data.universityEmail,copyLabel:t('copyEmail')+' '+t('universityEmail')});
    const phoneDigits=String(data.phone || '').replace(/\D/g,'');
    if(phoneDigits.length>=9 && phoneDigits.length<=15) methods.push({label:t('phoneLabel'),value:data.phone,href:'tel:'+(phoneDigits.startsWith('0')?'+66'+phoneDigits.slice(1):phoneDigits),copyLabel:t('copyPhone')});
    $('#contact-links').innerHTML=methods.map(method=>`<div class="contact-method"><p class="contact-method-label">${escape(method.label)}</p><div class="contact-method-row"><a class="contact-method-link" href="${escape(method.href)}">${escape(method.value)}${icon('arrow-up-right')}</a><button type="button" class="icon-button contact-copy" data-copy-contact="${escape(method.value)}" aria-label="${escape(method.copyLabel)}">${icon('copy')}</button></div></div>`).join('');
    $('#contact-location').textContent=local(data.location);
    const socials=data.socials.filter(social=>safeUrl(social.url));
    $('#social-links').innerHTML=socials.map(social=>`<a href="${escape(safeUrl(social.url))}" target="_blank" rel="noopener noreferrer">${escape(social.label)}${icon('arrow-up-right')}</a>`).join('');
    $('#social-links').hidden=!socials.length;
  }

  function renderDetail(project) {
    $('#project-detail').innerHTML = `<img class="detail-image" src="${escape(safeUrl(project.image) || 'assets/atlas.svg')}" alt="${escape(local(project.alt))}"><div class="detail-body">${project.imageCaption ? `<p class="detail-image-caption">${escape(local(project.imageCaption))}</p>` : ''}<div class="detail-eyebrow"><span>${t('demo')}</span><span>${escape(project.type)} / ${escape(local(project.year))}</span></div><h2 id="project-dialog-title">${escape(language === 'en' ? (project.nameEn || project.name) : project.name)}</h2><p class="detail-summary">${escape(local(project.description))}</p><div class="detail-info"><div><h3>${t('role')}</h3><p>${escape(local(project.role))}</p></div><div><h3>${t('tools')}</h3><div class="tool-tags">${project.tools.map(tool=>`<span>${escape(tool)}</span>`).join('')}</div></div></div><section class="detail-block"><h3>${t('challenge')}</h3><p>${escape(local(project.challenge))}</p></section><section class="detail-block"><h3>${t('approach')}</h3><p>${escape(local(project.approach))}</p></section>${project.features?.length ? `<section class="detail-block"><h3>${t('features')}</h3><ul class="detail-features">${project.features.map(feature=>`<li>${escape(local(feature))}</li>`).join('')}</ul></section>` : ''}<section class="detail-block detail-outcome"><h3>${t('outcome')}</h3><p>${escape(local(project.result))}</p></section><div class="detail-actions">${safeUrl(project.liveUrl) ? `<a class="button button-dark" href="${escape(project.liveUrl)}" target="_blank" rel="noopener noreferrer">${t('live')}${icon('arrow-up-right')}</a>` : ''}${safeUrl(project.detailUrl) ? `<a class="button button-outline" href="${escape(project.detailUrl)}" target="_blank" rel="noopener noreferrer">${t('externalDetail')}${icon('arrow-up-right')}</a>` : ''}</div>${project.previewNote ? `<p class="detail-preview-note">${escape(local(project.previewNote))}</p>` : ''}<p class="detail-demo-note">${t('projectDisclaimer')}</p></div>`;
    if (!project.isPlaceholder) {
      $('.detail-eyebrow>span').textContent = t('caseStudy');
      $('.detail-demo-note').hidden = true;
    }
  }

  function renderResume() {
    $('#resume-content').innerHTML = `<h1 id="resume-title">${escape(local(data.name))}</h1><p class="resume-role">${escape(local(data.role))}</p><p>${escape(local(data.location))}${[data.email,data.universityEmail,data.phone].filter(Boolean).map(value=>' · '+escape(value)).join('')}</p><section><h2 class="resume-label">${t('summary')}</h2><p>${escape(local(data.intro))}</p></section><section><h2 class="resume-label">${t('workExperience')}</h2>${data.experience.concat(data.education || []).map(item=>`<h3>${escape(local(item.title))}</h3><p>${escape(local(item.organization))} | ${escape(local(item.period))}</p><p>${escape(local(item.description))}</p>`).join('')}</section><section><h2 class="resume-label">${t('selectedProjects')}</h2>${data.projects.map(project=>`<h3>${escape(language === 'en' ? (project.nameEn || project.name) : project.name)}</h3><p>${escape(local(project.role))}<br>${escape(local(project.result))}</p>`).join('')}</section><section><h2 class="resume-label">${t('skills')}</h2><p>${escape([...new Set(data.skills.flatMap(skill=>skill.tools))].join(' · '))}</p></section><div class="resume-watermark">${t('resumeNote')}</div>`;
    if (!data.isSample) $('.resume-watermark').hidden = true;
  }

  function render() {
    document.documentElement.lang = language;
    document.title = `${local(data.name)} — ICT Student Portfolio`;
    $('meta[name="description"]').content = t('metaDescription');
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
    document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
    document.querySelectorAll('[data-i18n-alt]').forEach(el=>el.setAttribute('alt',t(el.dataset.i18nAlt)));
    $('#hero-intro').textContent = `${t('hello')} ${local(data.name)}`;
    if ($('#profile-name')) $('#profile-name').textContent = local(data.name);
    $('#hero-role').textContent = local(data.role);
    $('#hero-description').textContent = local(data.intro);
    $('#about-lead').textContent = local(data.aboutLead);
    $('#about-body').textContent = local(data.aboutBody);
    $('#copyright').textContent = `© ${new Date().getFullYear()} ${local(data.name)}. ${t('copyright')}`;
    if (safeUrl(data.resumeUrl)) $('#resume-button span').textContent = t('resumeDownload');
    renderProjects(); renderSkills(); renderTimeline(); renderContact(); renderEducation();
    if ($('.sample-note')) $('.sample-note').hidden = !data.isSample;
    if (!data.isSample) {
      $('.section-side-note').textContent = t('selectedWorkLabel');
      if (!safeUrl(data.resumeUrl)) $('#resume-button span').textContent = t('resumePreview');
      $('.resume-toolbar>span').textContent = 'Resume';
    }
    if (currentProject) renderDetail(currentProject);
    if ($('#resume-dialog').open) renderResume();
  }

  function openDialog(dialog) {
    lastFocused = document.activeElement;
    dialog.showModal();
    dialog.scrollTop=0;
    document.body.classList.add('modal-open');
  }
  function openProject(id) {
    currentProject = data.projects.find(project=>project.id===id);
    if (!currentProject) return;
    if (currentProject.caseStudy) {
      currentProject = null;
      if (location.hash !== '#projects') history.pushState(null,'','#projects');
      showPage('projects',true);
      return;
    }
    renderDetail(currentProject);
    const dialog = $('#project-dialog');
    dialog.setAttribute('aria-labelledby','project-dialog-title');
    openDialog(dialog);
  }
  function notify(message) {
    const toast = $('#toast'); toast.textContent=message; toast.classList.add('visible');
    clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('visible'),3500);
  }

  document.addEventListener('click',async event=>{
    const langButton=event.target.closest('[data-lang]');
    if (langButton) {
      language=langButton.dataset.lang;
      try { localStorage.setItem('portfolio-language',language); } catch {}
      // Update an explicit language URL too so refresh keeps the selection.
      const url = new URL(location.href);
      if (url.searchParams.has('lang')) { url.searchParams.set('lang',language); history.replaceState(null,'',url); }
      render(); return;
    }
    const filterButton=event.target.closest('[data-filter]');
    if (filterButton) {
      filter=filterButton.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(button=>{ const active=button===filterButton; button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active)); });
      renderProjects();return;
    }
    if (event.target.closest('[data-show-gallery]')) {
      const gallery = $('#project-gallery');
      if (gallery) gallery.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',block:'start'});
      return;
    }
    const downloadButton=event.target.closest('[data-download-project]');
    if(downloadButton) { await downloadProject(downloadButton.dataset.downloadProject);return; }
    const projectButton=event.target.closest('[data-project]');
    if (projectButton) { openProject(projectButton.dataset.project); return; }
    if (event.target.closest('[data-close-dialog]')) { event.target.closest('dialog').close();return; }
    if (event.target.closest('.menu-toggle')) {
      const menu=$('#mobile-nav'),button=$('.menu-toggle');
      const expanded=button.getAttribute('aria-expanded')==='true';
      menu.hidden=expanded;button.setAttribute('aria-expanded',String(!expanded));return;
    }
    if (event.target.closest('#mobile-nav a')) { $('#mobile-nav').hidden=true;$('.menu-toggle').setAttribute('aria-expanded','false'); }
    const contactCopy=event.target.closest('[data-copy-contact]');
    if (contactCopy) {
      try { await navigator.clipboard.writeText(contactCopy.dataset.copyContact);notify(t('copied')); } catch { notify(t('copyFailed')); } return;
    }
    if (event.target.closest('#resume-button')) {
      if (safeUrl(data.resumeUrl)) { const link=document.createElement('a');link.href=data.resumeUrl;link.download='Resume.pdf';document.body.append(link);link.click();link.remove(); }
      else { renderResume();$('#resume-dialog').setAttribute('aria-labelledby','resume-title');openDialog($('#resume-dialog')); } return;
    }
    if (event.target.closest('#print-resume')) window.print();
  });
  document.querySelectorAll('dialog').forEach(dialog=>{
    dialog.addEventListener('click',event=>{ if (event.target===dialog) { const bounds=dialog.getBoundingClientRect(); if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom) dialog.close(); } });
    dialog.addEventListener('close',()=>{ document.body.classList.remove('modal-open');if(dialog.id==='project-dialog') currentProject=null;lastFocused?.focus({preventScroll:true}); });
  });
  document.addEventListener('keydown',event=>{
    if (event.key==='Escape') {
      $('#mobile-nav').hidden=true;
      $('.menu-toggle').setAttribute('aria-expanded','false');
      document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
    }
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change',event=>{
    if(event.matches){$('#mobile-nav').hidden=true;$('.menu-toggle').setAttribute('aria-expanded','false');}
  });
  render();

  const pages = ['home','about','projects','skills','experience','contact'];
  function showPage(id, focus = false) {
    const page = pages.includes(id) ? id : 'home';
    document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
    document.querySelectorAll('[data-view]').forEach(el => { el.hidden = el.dataset.view !== page; });
    document.body.dataset.page = page;
    document.querySelectorAll('.desktop-nav a, .mobile-nav a, .header-contact').forEach(link => {
      const active = link.hash === '#' + page;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
    });
    $('#mobile-nav').hidden = true;
    $('.menu-toggle').setAttribute('aria-expanded','false');
    window.scrollTo({top:0,behavior:'instant'});
    if (focus) {
      const heading = document.querySelector('[data-view="'+page+'"] h1, [data-view="'+page+'"] h2');
      if (heading) { heading.setAttribute('tabindex','-1'); heading.focus({preventScroll:true}); }
    }
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !pages.includes(link.hash.slice(1))) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null,'',link.hash);
    showPage(link.hash.slice(1),true);
  });
  window.addEventListener('popstate',()=>showPage(location.hash.slice(1)));
  window.addEventListener('hashchange',()=>showPage(location.hash.slice(1)));
  showPage(location.hash.slice(1));

})();
