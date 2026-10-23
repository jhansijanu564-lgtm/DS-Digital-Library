"use strict";

/* -----------------------------
   DATA SCIENCE DIGITAL LIBRARY
   Main JavaScript File
------------------------------ */

const KEYS = {
  profile: "dsdl_profile",
  profileImage: "dsdl_profile_image",
  idCard: "dsdl_id_card",
  modules: "dsdl_modules",
  labs: "dsdl_labs",
  assignments: "dsdl_assignments"
};

const defaultProfile = {
  fullName: "M. Jhansi",
  registration: "24102A030152",
  department: "Data Science",
  section: "3",
  subject: "Data Science",
  faculty: "Bosu Babu",
  github: "https://github.com/jhansijanu564-lgtm",
  linkedin: "https://www.linkedin.com/in/jhansi17/",
  email: "jhansijohnson564@gmail.com"
};

const moduleLessons = [
  { id: "lesson-1", title: "MODULE 1 – TYPES OF DATA ANALYSIS" },
  { id: "lesson-2", title: "MODULE 2 – EXTRACTING MEANING FROM DATA" },
  { id: "lesson-3", title: "MODULE 3 – EXPLORATORY DATA ANALYSIS & VISUALIZATION" },
  { id: "lesson-4", title: "MODULE 4 – STATISTICS & MACHINE LEARNING" },
  { id: "lesson-5", title: "MODULE 5 – ADVANCED DATA SCIENCE APPLICATIONS" }
];

const moduleResourceFiles = [
  { id: "module-1-descriptive-analysis", title: "Descriptive Analysis", name: "Descriptive Analysis.1", url: "resources/module-1/descriptive-analysis.pdf" },
  { id: "module-1-diagnostic-analytics", title: "Diagnostic Analytics", name: "Diagnostic Analytics.1", url: "resources/module-1/diagnostic-analytics.pdf" },
  { id: "module-1-predictive-analytics", title: "Predictive Analytics", name: "Predictive Analytics.1.pptx", url: "resources/module-1/predictive-analytics.pdf" },
  { id: "module-1-mechanistic-analysis", title: "Mechanistic Analysis", name: "Mechanistic Analysis.1.pptx", url: "resources/module-1/mechanistic-analysis.pdf" },
  { id: "module-1-skills-data-science", title: "Skills for Data Science", name: "Skills for data science.1", url: "resources/module-1/skills-for-data-science.pdf" },
  { id: "module-1-data-processing", title: "Data Processing", name: "Data Processing.1.ppt", url: "resources/module-1/data-processing.pdf" },
  { id: "module-1-tools-data-science", title: "Tools for Data Science", name: "Tools For Data Science.2.pptx", url: "resources/module-1/tools-for-data-science.pdf" }
];

const module2ResourceFiles = [
  { id: "module-2-dimensionality-pca-lda", title: "Dimensionality: PCA, LDA", name: "Dimensionality. PCA, LDA.2.pdf", url: "resources/module-2/dimensionality-pca-lda.pdf" },
  { id: "module-2-user-retention", title: "User Retention", name: "User Retention.2", url: "resources/module-2/user-retention.pdf" },
  { id: "module-2-storey-decision-trees", title: "Decision Trees", name: "Storey_DecisionTrees.2", url: "resources/module-2/storey-decision-trees.pdf" },
  { id: "module-2-feature-selection", title: "Feature Selection", name: "Feature Selection.2", url: "resources/module-2/feature-selection.pdf" },
  { id: "module-2-decision-tree-classification", title: "Decision Tree Classification Algorithm", name: "Decision Tree Classification Algorithm.2.pptx", url: "resources/module-2/decision-tree-classification-algorithm.pdf" },
  { id: "module-2-data-types-lifecycle", title: "Data Types, Lifecycle, and Applications", name: "Data Types-lifecycle-and-applications.2.pptx", url: "resources/module-2/data-types-lifecycle-applications.pdf" }
];

const module3ResourceFiles = [
  { id: "module-3-exploratory-data-analysis-visualization", title: "Exploratory Data Analysis & Visualization", name: "exploratory-data-analysis-visualization.pdf", url: "resources/module-3/exploratory-data-analysis-visualization.pdf" }
];

const module4ResourceFiles = [
  { id: "module-4-statistics-machine-learning", title: "Statistics & Machine Learning", name: "statistics-machine-learning.pdf", url: "resources/module-4/statistics-machine-learning.pdf" }
];

const module5ResourceFiles = [
  { id: "module-5-advanced-data-science-applications", title: "Advanced Data Science Applications", name: "advanced-data-science-applications.pdf", url: "resources/module-5/advanced-data-science-applications.pdf" }
];

function getModuleResourceFiles(lessonId) {
  if (lessonId === "lesson-1") return moduleResourceFiles;
  if (lessonId === "lesson-2") return module2ResourceFiles;
  if (lessonId === "lesson-3") return module3ResourceFiles;
  if (lessonId === "lesson-4") return module4ResourceFiles;
  if (lessonId === "lesson-5") return module5ResourceFiles;
  return [];
}

function findModuleResource(resourceId) {
  return [...moduleResourceFiles, ...module2ResourceFiles, ...module3ResourceFiles, ...module4ResourceFiles, ...module5ResourceFiles].find((resource) => resource.id === resourceId);
}

const tools = [
  { name: "Python", category: "Language", icon: "fa-brands fa-python", description: "A widely used language for Data Science, automation, machine learning, and analytics.", url: "https://www.python.org/", docs: "https://docs.python.org/3/" },
  { name: "Java", category: "Language", icon: "fa-brands fa-java", description: "A robust object-oriented programming language used in enterprise and data systems.", url: "https://www.oracle.com/java/", docs: "https://docs.oracle.com/en/java/" },
  { name: "C", category: "Language", icon: "fa-solid fa-c", description: "A foundational programming language for efficient systems programming.", url: "https://en.cppreference.com/w/c", docs: "https://en.cppreference.com/w/c" },
  { name: "C++", category: "Language", icon: "fa-solid fa-code", description: "A high-performance language used in systems, simulations, and computing.", url: "https://en.cppreference.com/w/cpp", docs: "https://en.cppreference.com/w/cpp" },
  { name: "R", category: "Language", icon: "fa-solid fa-chart-column", description: "A language and environment designed for statistical computing and visualization.", url: "https://www.r-project.org/", docs: "https://www.r-project.org/" },
  { name: "Jupyter Notebook", category: "Notebook", icon: "fa-solid fa-book", description: "Interactive notebooks for code, data, visualizations, and narrative explanations.", url: "https://jupyter.org/", docs: "https://jupyter.org/documentation" },
  { name: "Google Colab", category: "Notebook", icon: "fa-brands fa-google", description: "Cloud-hosted notebooks with easy sharing and optional GPU access.", url: "https://colab.research.google.com/", docs: "https://colab.research.google.com/notebooks/" },
  { name: "Kaggle", category: "Data Analysis", icon: "fa-brands fa-kaggle", description: "A platform for datasets, notebooks, competitions, and community learning.", url: "https://www.kaggle.com/", docs: "https://www.kaggle.com/docs" },
  { name: "VS Code", category: "Development", icon: "fa-solid fa-laptop-code", description: "A customizable code editor with extensions for Python and Data Science.", url: "https://code.visualstudio.com/", docs: "https://code.visualstudio.com/docs" },
  { name: "GitHub", category: "Development", icon: "fa-brands fa-github", description: "Host repositories, collaborate on code, and build a public portfolio.", url: "https://github.com/", docs: "https://docs.github.com/" },
  { name: "Anaconda", category: "Data Analysis", icon: "fa-solid fa-box", description: "A distribution that helps manage Python environments and packages.", url: "https://www.anaconda.com/", docs: "https://docs.anaconda.com/" },
  { name: "RStudio", category: "Development", icon: "fa-solid fa-r", description: "A development environment for R programming and statistical analysis.", url: "https://posit.co/download/rstudio-desktop/", docs: "https://docs.posit.co/" },
  { name: "PyTorch", category: "Machine Learning", icon: "fa-solid fa-fire", description: "An open-source framework for deep learning and neural networks.", url: "https://pytorch.org/", docs: "https://docs.pytorch.org/" },
  { name: "TensorFlow", category: "Machine Learning", icon: "fa-solid fa-brain", description: "A machine learning platform for building and deploying AI models.", url: "https://www.tensorflow.org/", docs: "https://www.tensorflow.org/learn" },
  { name: "scikit-learn", category: "Machine Learning", icon: "fa-solid fa-gears", description: "A Python library for classical machine learning and data preprocessing.", url: "https://scikit-learn.org/", docs: "https://scikit-learn.org/stable/user_guide.html" },
  { name: "pandas", category: "Data Analysis", icon: "fa-solid fa-table", description: "A Python library for tabular data processing and analysis.", url: "https://pandas.pydata.org/", docs: "https://pandas.pydata.org/docs/" },
  { name: "NumPy", category: "Data Analysis", icon: "fa-solid fa-calculator", description: "Core numerical computing library for Python arrays and calculations.", url: "https://numpy.org/", docs: "https://numpy.org/doc/" },
  { name: "Tableau Public", category: "Visualization", icon: "fa-solid fa-chart-pie", description: "Build and share interactive public data visualizations.", url: "https://public.tableau.com/", docs: "https://help.tableau.com/" },
  { name: "Power BI", category: "Visualization", icon: "fa-solid fa-chart-area", description: "Microsoft platform for business intelligence and dashboards.", url: "https://www.microsoft.com/power-platform/products/power-bi", docs: "https://learn.microsoft.com/power-bi/" },
  { name: "Apache Spark", category: "Big Data", icon: "fa-solid fa-bolt", description: "A large-scale distributed engine for data processing and analytics.", url: "https://spark.apache.org/", docs: "https://spark.apache.org/docs/latest/" }
];

const resources = [
  { title: "Python Official Documentation", description: "Official language documentation, tutorials, library references, and guides.", language: "Python", type: "Documentation", url: "https://docs.python.org/3/" },
  { title: "Java Documentation", description: "Oracle documentation for Java development and APIs.", language: "Java", type: "Documentation", url: "https://docs.oracle.com/en/java/" },
  { title: "C Language Reference", description: "C language reference materials and standard library documentation.", language: "C", type: "Documentation", url: "https://en.cppreference.com/w/c" },
  { title: "C++ Reference", description: "C++ language and standard library reference.", language: "C++", type: "Documentation", url: "https://en.cppreference.com/w/cpp" },
  { title: "R Project", description: "The official home for the R language and statistical computing environment.", language: "R", type: "Documentation", url: "https://www.r-project.org/" },
  { title: "RStudio Desktop", description: "Download the RStudio integrated development environment.", language: "R", type: "Documentation", url: "https://posit.co/download/rstudio-desktop/" },
  { title: "PyTorch Official Website", description: "Official PyTorch deep learning framework website.", language: "PyTorch", type: "Documentation", url: "https://pytorch.org/" },
  { title: "PyTorch Tutorials", description: "Step-by-step official PyTorch tutorials for beginners and advanced users.", language: "PyTorch", type: "Course", url: "https://docs.pytorch.org/tutorials/" },
  { title: "scikit-learn", description: "Machine learning documentation, examples, and user guide.", language: "Machine Learning", type: "Documentation", url: "https://scikit-learn.org/" },
  { title: "pandas Documentation", description: "Official guide for Python data manipulation and analysis.", language: "Python", type: "Documentation", url: "https://pandas.pydata.org/docs/" },
  { title: "NumPy Documentation", description: "Official numerical computing documentation for Python.", language: "Python", type: "Documentation", url: "https://numpy.org/doc/" },
  { title: "Kaggle Datasets", description: "Explore public datasets for Data Science practice and projects.", language: "Datasets", type: "Dataset", url: "https://www.kaggle.com/datasets" },
  { title: "UCI Machine Learning Repository", description: "A long-running collection of datasets for machine learning research.", language: "Datasets", type: "Dataset", url: "https://archive.ics.uci.edu/" },
  { title: "Google Dataset Search", description: "Search for datasets hosted across the web.", language: "Datasets", type: "Dataset", url: "https://datasetsearch.research.google.com/" },
  { title: "GitHub", description: "Explore repositories, collaborate, and publish your code.", language: "Open Source Data Science", type: "Open Source", url: "https://github.com/" },
  { title: "Jupyter", description: "Official project for interactive computational notebooks.", language: "Python", type: "Open Source", url: "https://jupyter.org/" },
  { title: "Google Colab", description: "Cloud notebooks for Python, Data Science, and machine learning.", language: "Python", type: "Course", url: "https://colab.research.google.com/" },
  { title: "Awesome Data Science", description: "A curated open-source list of Data Science resources.", language: "Open Source Data Science", type: "Open Source", url: "https://github.com/academic/awesome-datascience" },
  { title: "freeCodeCamp Data Science", description: "Long-form Data Science learning videos and beginner-friendly courses.", language: "Machine Learning", type: "YouTube", url: "https://www.youtube.com/@freecodecamp" },
  { title: "Krish Naik", description: "Data Science, machine learning, and career-focused video tutorials.", language: "Machine Learning", type: "YouTube", url: "https://www.youtube.com/@krishnaik06" },
  { title: "codebasics", description: "Practical Data Science, analytics, Python, and machine learning lessons.", language: "Python", type: "YouTube", url: "https://www.youtube.com/@codebasics" },
  { title: "StatQuest with Josh Starmer", description: "Clear statistics and machine learning explanations.", language: "Machine Learning", type: "YouTube", url: "https://www.youtube.com/@statquest" },
  { title: "Corey Schafer Python Tutorials", description: "Structured Python programming tutorials and practical examples.", language: "Python", type: "YouTube", url: "https://www.youtube.com/@coreyms" },
  { title: "PyTorch Beginner Videos", description: "Video search for beginner-oriented PyTorch learning materials.", language: "PyTorch", type: "YouTube", url: "https://www.youtube.com/results?search_query=pytorch+beginner+tutorial" },
  { title: "Tableau Public", description: "Learn to create and publish interactive visualizations.", language: "Data Visualization", type: "Course", url: "https://public.tableau.com/" }
];

let selectedModuleId = null;
let selectedModuleResourceId = null;
let viewerState = { zoom: 1, rotation: 0, flip: 1 };
let modulePdfDocument = null;
let modulePdfDocumentId = null;
let modulePdfRenderToken = 0;
let modulePageNumber = 1;

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }
  setPlaceholderImages();
  bindSidebar();
  bindHomeIdentity();
  bindModuleFeatures();
  bindLabFeatures();
  bindToolAndResourceFilters();
  bindProfileFeatures();
  bindModal();
  renderAll();
}

/* -----------------------------
   Storage Utilities
------------------------------ */

function getData(key, fallback = []) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.error(error);
    return fallback;
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    toast("Could not save this item. The file may be too large for local storage.");
    console.error(error);
    return false;
  }
}

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatDate(dateValue) {
  if (!dateValue) return "Not available";
  return new Date(dateValue).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function formatFileSize(bytes = 0) {
  if (!bytes) return "0 KB";
  const units = ["Bytes", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, index)).toFixed(index === 0 ? 0 : 2)} ${units[index]}`;
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function defaultAvatarDataUrl() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
      <rect width="100%" height="100%" fill="#5E83AE"/>
      <circle cx="120" cy="83" r="45" fill="#F5F5DC"/>
      <path d="M40 220c10-52 46-76 80-76s70 24 80 76" fill="#3f5f83"/>
      <text x="120" y="220" text-anchor="middle" fill="#F5F5DC" font-family="Arial" font-size="30">MJ</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setPlaceholderImages() {
  const savedImage = localStorage.getItem(KEYS.profileImage) || defaultAvatarDataUrl();

  ["sidebarProfileImage", "homeProfilePreview", "profilePageImage"].forEach((id) => {
    const image = document.getElementById(id);
    if (image) image.src = savedImage;
  });
}

function toast(message) {
  const toastElement = document.getElementById("toast");
  toastElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2800);
}

/* -----------------------------
   File Utilities
------------------------------ */

function fileIcon(file) {
  if (!file) return "fa-regular fa-file";
  if (file.type.includes("pdf")) return "fa-solid fa-file-pdf";
  if (file.type.includes("image")) return "fa-solid fa-file-image";
  if (file.type.includes("word") || /\.(doc|docx)$/i.test(file.name)) return "fa-solid fa-file-word";
  if (file.type.includes("presentation") || /\.(ppt|pptx)$/i.test(file.name)) return "fa-solid fa-file-powerpoint";
  if (file.type.includes("csv") || file.type.includes("text")) return "fa-solid fa-file-lines";
  if (file.type.includes("zip")) return "fa-solid fa-file-zipper";
  return "fa-regular fa-file";
}

function downloadStoredFile(file) {
  if (!file?.data) {
    toast("No file is available to download.");
    return;
  }

  const link = document.createElement("a");
  link.href = file.data;
  link.download = file.name || "download";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function previewStoredFile(file, title = "File Preview") {
  if (!file?.data) {
    toast("No file is available to preview.");
    return;
  }

  const modal = document.getElementById("previewModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = title;
  modalBody.innerHTML = "";

  if (file.type.includes("pdf")) {
    modalBody.innerHTML = `<iframe src="${file.data}" title="${escapeHTML(title)}"></iframe>`;
  } else if (file.type.includes("image")) {
    modalBody.innerHTML = `<img src="${file.data}" alt="${escapeHTML(title)}" />`;
  } else if (file.type.includes("text") || file.type.includes("csv")) {
    fetch(file.data)
      .then((response) => response.text())
      .then((text) => {
        modalBody.innerHTML = `<pre class="modal-text-preview">${escapeHTML(text)}</pre>`;
      })
      .catch(() => {
        modalBody.innerHTML = `<p>Preview is not available for this file.</p>`;
      });
  } else {
    modalBody.innerHTML = `
      <div class="empty-preview">
        <i class="${fileIcon(file)}"></i>
        <p>Preview is not supported in the browser for this file type.</p>
        <button class="btn btn-primary" id="modalDownloadFile">Download File</button>
      </div>
    `;
    document.getElementById("modalDownloadFile").addEventListener("click", () => downloadStoredFile(file));
  }

  modal.classList.remove("hidden");
}

function bindModal() {
  document.getElementById("closeModal").addEventListener("click", closeModal);

  document.getElementById("previewModal").addEventListener("click", (event) => {
    if (event.target.id === "previewModal") closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function closeModal() {
  document.getElementById("previewModal").classList.add("hidden");
}

/* -----------------------------
   Navigation
------------------------------ */

function bindSidebar() {
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("collapsed");
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.section));
  });

  document.querySelectorAll(".go-section").forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.target));
  });

}

function showSection(sectionId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.section === sectionId);
  });

  const titleMap = {
    home: "DATA SCIENCE DIGITAL LIBRARY",
    modules: "MODULES",
    labs: "LAB EXPERIMENTS",
    projects: "PROJECTS",
    assignments: "ASSIGNMENTS",
    tools: "DATA SCIENCE TOOLS",
    resources: "LEARNING RESOURCES",
    profile: "STUDENT PROFILE"
  };

  document.getElementById("pageTitle").textContent = titleMap[sectionId] || "DATA SCIENCE DIGITAL LIBRARY";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* -----------------------------
   Home Identity Features
------------------------------ */

function bindHomeIdentity() {
  ["homeViewId", "profileViewId"].forEach((id) => {
    document.getElementById(id).addEventListener("click", () => {
      previewStoredFile(getData(KEYS.idCard, null), "ID Card Preview");
    });
  });

  ["homeDownloadId", "profileDownloadId"].forEach((id) => {
    document.getElementById(id).addEventListener("click", () => {
      downloadStoredFile(getData(KEYS.idCard, null));
    });
  });

}

function renderIdentityStatus() {
  const idCard = getData(KEYS.idCard, null);
  const status = idCard ? `On file: ${idCard.name}` : "No ID card on file.";

  document.getElementById("homeIdStatus").textContent = status;
  document.getElementById("profileIdStatus").textContent = status;
}

/* -----------------------------
   Modules
------------------------------ */

function bindModuleFeatures() {
  const moduleResourceBack = document.getElementById("moduleResourceBack");
  if (moduleResourceBack) {
    moduleResourceBack.addEventListener("click", () => {
      selectedModuleResourceId = null;
      modulePdfDocument = null;
      modulePdfDocumentId = null;
      modulePageNumber = 1;
      renderModules();
    });
  }

  document.querySelectorAll(".viewer-control").forEach((button) => {
    button.addEventListener("click", () => controlViewer(button.dataset.viewerAction));
  });
}

function renderModules() {
  const modules = getData(KEYS.modules, []);
  const list = document.getElementById("moduleList");

  if (!selectedModuleId) {
    selectedModuleId = moduleLessons[0].id;
  } else if (!moduleLessons.some((lesson) => lesson.id === selectedModuleId)
      && !modules.some((module) => module.id === selectedModuleId)) {
    selectedModuleId = moduleLessons[0].id;
  }

  const lessonItems = moduleLessons.map((lesson) => {
    const uploaded = modules.find((module) => module.id === lesson.id);
    const resourceCount = getModuleResourceFiles(lesson.id).length;

    return `
    <article class="list-item module-lesson ${lesson.id === selectedModuleId ? "selected" : ""}">
      <button class="list-item-title select-module" data-id="${lesson.id}" title="${escapeHTML(lesson.title)}">
        <i class="${uploaded ? fileIcon(uploaded) : "fa-regular fa-file-pdf"}"></i>
        <span>${escapeHTML(lesson.title)}</span>
      </button>
      <small>${uploaded ? `PDF available · ${formatFileSize(uploaded.size)}` : (resourceCount ? `${resourceCount} PDF files available in Module ${lesson.id.slice(-1)}` : "No PDF resources available yet")}</small>
      <div class="list-actions">
        <button class="icon-btn module-view" data-id="${lesson.id}" title="${uploaded ? "View in flip-book" : "Select lesson"}"><i class="fa-solid fa-eye"></i></button>
        ${uploaded ? `
          <button class="icon-btn module-download" data-id="${lesson.id}" title="Download PDF"><i class="fa-solid fa-download"></i></button>
        ` : ""}
      </div>
    </article>
  `;
  }).join("");

  const legacyModules = modules.filter((module) => !moduleLessons.some((lesson) => lesson.id === module.id));
  const legacyItems = legacyModules.map((module) => `
    <article class="list-item ${module.id === selectedModuleId ? "selected" : ""}">
      <button class="list-item-title select-module" data-id="${module.id}" title="Select ${escapeHTML(module.name)}">
        <i class="${fileIcon(module)}"></i>
        <span>${escapeHTML(module.name)}</span>
      </button>
      <small>${escapeHTML(module.type || "Document")} · ${formatFileSize(module.size)} · ${formatDate(module.uploadedAt)}</small>
      <div class="list-actions">
        <button class="icon-btn module-view" data-id="${module.id}" title="View"><i class="fa-solid fa-eye"></i></button>
        <button class="icon-btn module-download" data-id="${module.id}" title="Download"><i class="fa-solid fa-download"></i></button>
      </div>
    </article>
  `).join("");
  list.innerHTML = lessonItems + (legacyItems ? `<h4 class="legacy-module-heading">Other saved files</h4>${legacyItems}` : "");

  const resourceBackButton = document.getElementById("moduleResourceBack");
  resourceBackButton.classList.toggle("hidden", !selectedModuleResourceId);
  if (selectedModuleResourceId) {
    const selectedLesson = moduleLessons.find((lesson) => lesson.id === selectedModuleId);
    resourceBackButton.innerHTML = `<i class="fa-solid fa-arrow-left"></i> All ${escapeHTML(selectedLesson?.title || "module")} resources`;
  }
  if (selectedModuleResourceId) {
    const selectedLesson = moduleLessons.find((lesson) => lesson.id === selectedModuleId);
    resourceBackButton.innerHTML = `<i class="fa-solid fa-arrow-left"></i> All ${escapeHTML(selectedLesson?.title || "module")} resources`;
  }

  list.querySelectorAll(".select-module").forEach((button) => {
    button.addEventListener("click", () => {
      selectedModuleId = button.dataset.id;
      selectedModuleResourceId = null;
      viewerState = { zoom: 1, rotation: 0, flip: 1 };
      modulePageNumber = 1;
      modulePdfDocument = null;
      modulePdfDocumentId = null;
      renderModules();
    });
  });

  list.querySelectorAll(".module-view").forEach((button) => {
    button.addEventListener("click", () => {
      selectedModuleId = button.dataset.id;
      selectedModuleResourceId = null;
      modulePageNumber = 1;
      modulePdfDocument = null;
      modulePdfDocumentId = null;
      renderModules();
    });
  });

  list.querySelectorAll(".module-download").forEach((button) => {
    button.addEventListener("click", () => {
      const item = modules.find((module) => module.id === button.dataset.id);
      downloadStoredFile(item);
    });
  });

  const selected = modules.find((module) => module.id === selectedModuleId);
  renderModulePreview(selected, moduleLessons.find((lesson) => lesson.id === selectedModuleId));
  updateStatistics();
}

function renderModulePreview(moduleItem, lesson) {
  const preview = document.getElementById("modulePreview");

  if (selectedModuleResourceId) {
    const resource = findModuleResource(selectedModuleResourceId);
    if (resource) {
      renderModulePdfPage(resource);
      return;
    }
  }

  const lessonResources = getModuleResourceFiles(lesson?.id);
  if (lessonResources.length) {
    modulePdfRenderToken += 1;
    const resourceCards = lessonResources.map((resource) => `
      <article class="module-resource-card">
        <div class="module-resource-meta">
          <i class="fa-solid fa-file-lines"></i>
          <div>
            <h4>${escapeHTML(resource.title)}</h4>
            <small>${escapeHTML(resource.name)}</small>
          </div>
        </div>
        <div class="module-resource-actions">
          <button class="btn btn-outline module-resource-open" data-resource-id="${resource.id}">
            <i class="fa-solid fa-book-open"></i> Open in viewer
          </button>
          <a class="btn btn-primary" href="${resource.url}" download="${escapeHTML(resource.name.replace(/\.[^.]+$/, ""))}.pdf">
            <i class="fa-solid fa-download"></i> Download PDF
          </a>
        </div>
      </article>
    `).join("");

    preview.innerHTML = `
      <div class="module-resource-panel">
        <div class="empty-preview compact-preview">
          <i class="fa-solid fa-book-open"></i>
          <h3>${escapeHTML(lesson.title)}</h3>
          <p>Open a resource to read it in the interactive flip-book viewer.</p>
        </div>
        <div class="module-resource-list">${resourceCards}</div>
      </div>
    `;

    preview.querySelectorAll(".module-resource-open").forEach((button) => {
      button.addEventListener("click", () => {
        selectedModuleResourceId = button.dataset.resourceId;
        modulePageNumber = 1;
        modulePdfDocument = null;
        modulePdfDocumentId = null;
        document.getElementById("moduleResourceBack").classList.remove("hidden");
        renderModulePreview(null, lesson);
      });
    });
    return;
  }

  if (!moduleItem) {
    modulePdfRenderToken += 1;
    preview.innerHTML = `
      <div class="empty-preview">
        <i class="fa-solid fa-book-open"></i>
        <h3>${escapeHTML(lesson?.title || "Select a lesson")}</h3>
        <p>This lesson does not have any resources yet.</p>
      </div>
    `;
    return;
  }

  if (moduleItem.url || moduleItem.type?.includes("pdf") || /\.pdf$/i.test(moduleItem.name)) {
    renderModulePdfPage(moduleItem);
  } else if (moduleItem.type?.includes("image")) {
    const transform = `scale(${viewerState.zoom}) rotate(${viewerState.rotation}deg) scaleX(${viewerState.flip})`;
    preview.innerHTML = `<img src="${moduleItem.data}" alt="${escapeHTML(moduleItem.name)}" style="transform:${transform};" />`;
  } else {
    preview.innerHTML = `
      <div class="empty-preview">
        <i class="${fileIcon(moduleItem)}"></i>
        <h3>${escapeHTML(moduleItem.name)}</h3>
        <p>${escapeHTML(moduleItem.type || "Document")} · ${formatFileSize(moduleItem.size)}</p>
        <p>This file type cannot be previewed directly in the browser. Use View or Download.</p>
        <button class="btn btn-primary" id="previewModuleDownload">Download Module</button>
      </div>
    `;
    document.getElementById("previewModuleDownload").addEventListener("click", () => downloadStoredFile(moduleItem));
  }
}

async function renderModulePdfPage(moduleItem, turnDirection = "") {
  const preview = document.getElementById("modulePreview");
  const renderToken = ++modulePdfRenderToken;
  preview.innerHTML = `<div class="empty-preview"><i class="fa-solid fa-book-open"></i><p>Loading lesson PDF…</p></div>`;

  try {
    if (!window.pdfjsLib) throw new Error("PDF viewer library is unavailable.");

    if (!modulePdfDocument || modulePdfDocumentId !== moduleItem.id) {
      let loadingTask;
      if (moduleItem.data) {
        const base64 = moduleItem.data.slice(moduleItem.data.indexOf(",") + 1);
        const binary = atob(base64);
        const pdfBytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index += 1) pdfBytes[index] = binary.charCodeAt(index);
        loadingTask = window.pdfjsLib.getDocument({ data: pdfBytes });
      } else if (moduleItem.url) {
        loadingTask = window.pdfjsLib.getDocument(moduleItem.url);
      } else {
        throw new Error("The selected PDF has no data or URL.");
      }
      const pdfDocument = await loadingTask.promise;
      if (renderToken !== modulePdfRenderToken) return;
      modulePdfDocument = pdfDocument;
      modulePdfDocumentId = moduleItem.id;
      modulePageNumber = 1;
    }

    if (renderToken !== modulePdfRenderToken) return;

    const targetPageNumber = modulePageNumber;
    const secondPageNumber = targetPageNumber + 1;
    const spreadPages = await Promise.all([
      modulePdfDocument.getPage(targetPageNumber),
      secondPageNumber <= modulePdfDocument.numPages
        ? modulePdfDocument.getPage(secondPageNumber)
        : Promise.resolve(null)
    ]);
    if (renderToken !== modulePdfRenderToken) return;

    const availableWidth = Math.max(preview.clientWidth - 96, 320);
    const pageViewports = spreadPages.map((pdfPage) => {
      if (!pdfPage) return null;
      const baseViewport = pdfPage.getViewport({ scale: 1 });
      return pdfPage.getViewport({
        scale: Math.min((availableWidth / 2) / baseViewport.width, 1.5)
      });
    });
    const spreadHeight = Math.max(...pageViewports.filter(Boolean).map((viewport) => viewport.height), 400);
    const spreadEnd = secondPageNumber <= modulePdfDocument.numPages
      ? secondPageNumber
      : targetPageNumber;
    const turningPageNumber = turnDirection === "next" ? targetPageNumber - 1 : targetPageNumber + 2;
    const reversePageNumber = turnDirection === "next" ? targetPageNumber : targetPageNumber + 1;

    preview.innerHTML = `
      <div class="flipbook">
        <div class="flipbook-book">
          <div class="flipbook-spread" role="group" aria-label="Pages ${targetPageNumber} to ${spreadEnd}" style="min-height:${spreadHeight}px">
            <div class="flipbook-page flipbook-left" data-page-side="prev" role="button" tabindex="0" aria-label="Previous spread, page ${targetPageNumber}">
              <canvas aria-label="PDF page ${targetPageNumber}"></canvas>
              ${turnDirection === "prev" ? `
                <div class="flipbook-sheet flipbook-sheet-left">
                  <div class="flipbook-face flipbook-front"><canvas aria-label="Page turning"></canvas></div>
                  <div class="flipbook-face flipbook-back"><canvas aria-label="Page revealed"></canvas></div>
                </div>
              ` : ""}
            </div>
            <div class="flipbook-page flipbook-right" data-page-side="next" role="button" tabindex="0" aria-label="Next spread${secondPageNumber <= modulePdfDocument.numPages ? `, page ${secondPageNumber}` : ""}">
              ${spreadPages[1] ? `<canvas aria-label="PDF page ${secondPageNumber}"></canvas>` : `<span class="flipbook-blank" aria-hidden="true"></span>`}
              ${turnDirection === "next" ? `
                <div class="flipbook-sheet flipbook-sheet-right">
                  <div class="flipbook-face flipbook-front"><canvas aria-label="Page turning"></canvas></div>
                  <div class="flipbook-face flipbook-back"><canvas aria-label="Page revealed"></canvas></div>
                </div>
              ` : ""}
            </div>
          </div>
        </div>
        <div class="flipbook-controls" aria-label="PDF page navigation">
          <button class="icon-btn module-page-control" data-page-direction="prev" title="Previous spread" ${targetPageNumber <= 1 ? "disabled" : ""}>
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <span>Pages ${targetPageNumber}–${spreadEnd} of ${modulePdfDocument.numPages} · click a page to turn</span>
          <button class="icon-btn module-page-control" data-page-direction="next" title="Next spread" ${targetPageNumber + 2 > modulePdfDocument.numPages ? "disabled" : ""}>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `;
    const drawPage = async (pdfPage, canvas, viewport) => {
      if (!pdfPage || !canvas || !viewport) return;
      const pixelRatio = window.devicePixelRatio || 1;
      const context = canvas.getContext("2d");
      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      await pdfPage.render({
        canvasContext: context,
        viewport,
        transform: pixelRatio === 1 ? null : [pixelRatio, 0, 0, pixelRatio, 0, 0]
      }).promise;
      canvas.style.transform = `scale(${viewerState.zoom}) rotate(${viewerState.rotation}deg) scaleX(${viewerState.flip})`;
    };

    const spreadCanvases = [
      preview.querySelector(".flipbook-left > canvas"),
      preview.querySelector(".flipbook-right > canvas")
    ];
    await Promise.all(spreadPages.map((pdfPage, index) =>
      drawPage(pdfPage, spreadCanvases[index], pageViewports[index])
    ));
    if (turnDirection) {
      const turningSheet = preview.querySelector(".flipbook-sheet");
      const turningCanvas = turningSheet.querySelector(".flipbook-front canvas");
      const reverseCanvas = turningSheet.querySelector(".flipbook-back canvas");
      const sheetPage = await modulePdfDocument.getPage(turningPageNumber);
      const reversePage = await modulePdfDocument.getPage(reversePageNumber);
      if (renderToken !== modulePdfRenderToken) return;
      const sheetViewport = pageViewports[0];
      await Promise.all([
        drawPage(sheetPage, turningCanvas, sheetViewport),
        drawPage(reversePage, reverseCanvas, sheetViewport)
      ]);
      turningSheet.addEventListener("animationend", () => {
        if (renderToken === modulePdfRenderToken && modulePageNumber === targetPageNumber) {
          renderModulePdfPage(moduleItem);
        }
      }, { once: true });
      turningSheet.classList.add(`turn-${turnDirection}`);
    }
    if (renderToken !== modulePdfRenderToken) return;

    preview.querySelectorAll(".module-page-control").forEach((button) => {
      button.addEventListener("click", () => {
        turnModulePage(moduleItem, button.dataset.pageDirection);
      });
    });

    preview.querySelectorAll(".flipbook-page").forEach((pageElement) => {
      pageElement.addEventListener("click", () => {
        turnModulePage(moduleItem, pageElement.dataset.pageSide);
      });
      pageElement.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        turnModulePage(moduleItem, pageElement.dataset.pageSide);
      });
    });
  } catch (error) {
    if (renderToken !== modulePdfRenderToken) return;
    modulePdfDocument = null;
    modulePdfDocumentId = null;
    console.error(error);
    preview.innerHTML = `
      <div class="empty-preview">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>The lesson PDF could not be opened. Check that the resource file is available and try again.</p>
      </div>
    `;
  }
}

function turnModulePage(moduleItem, direction) {
  if (!modulePdfDocument) return;
  const nextPage = modulePageNumber + (direction === "next" ? 2 : -2);
  if (nextPage < 1 || nextPage > modulePdfDocument.numPages) return;
  modulePageNumber = nextPage;
  renderModulePdfPage(moduleItem, direction);
}

function controlViewer(action) {
  const modules = getData(KEYS.modules, []);
  const moduleItem = findModuleResource(selectedModuleResourceId)
    || modules.find((module) => module.id === selectedModuleId);

  if (!moduleItem) {
    toast("Select a module first.");
    return;
  }

  if (action === "zoomIn") viewerState.zoom = Math.min(viewerState.zoom + 0.1, 1.8);
  if (action === "zoomOut") viewerState.zoom = Math.max(viewerState.zoom - 0.1, 0.5);
  if (action === "rotateLeft") viewerState.rotation -= 90;
  if (action === "rotateRight") viewerState.rotation += 90;
  if (action === "flip") viewerState.flip *= -1;
  if (action === "reset") viewerState = { zoom: 1, rotation: 0, flip: 1 };

  if (action === "fullscreen") {
    const preview = document.getElementById("modulePreview");
    if (preview.requestFullscreen) preview.requestFullscreen();
    return;
  }

  renderModulePreview(moduleItem, moduleLessons.find((lesson) => lesson.id === selectedModuleId));
}

/* -----------------------------
   Labs
------------------------------ */

function bindLabFeatures() {
  document.getElementById("labCode").addEventListener("input", updateLineNumbers);
  document.getElementById("saveLab").addEventListener("click", saveLab);
  document.getElementById("runCode").addEventListener("click", runDemoCode);
  document.getElementById("clearCode").addEventListener("click", clearCodeEditor);
  document.getElementById("copyCode").addEventListener("click", copyCode);
  document.getElementById("downloadCode").addEventListener("click", downloadCode);
}

function updateLineNumbers() {
  const code = document.getElementById("labCode").value;
  const lineCount = Math.max(1, code.split("\n").length);
  document.getElementById("lineNumbers").textContent = Array.from(
    { length: lineCount },
    (_, index) => index + 1
  ).join("\n");
}

function saveLab() {
  const labs = getData(KEYS.labs, []);
  const id = document.getElementById("labEditId").value;
  const existing = labs.find((item) => item.id === id);
  const lab = {
    id: id || uid(),
    title: existing?.title || `Coding Workspace Experiment ${labs.length + 1}`,
    number: existing?.number || String(labs.length + 1).padStart(2, "0"),
    objective: existing?.objective || "",
    theory: existing?.theory || "",
    algorithm: existing?.algorithm || "",
    language: document.getElementById("languageSelect").value,
    code: document.getElementById("labCode").value,
    sampleOutput: document.getElementById("labSampleOutput").value,
    originalOutput: document.getElementById("labOriginalOutput").value,
    result: document.getElementById("labResult").value,
    attachment: existing?.attachment || null,
    createdAt: existing?.createdAt || new Date().toISOString()
  };

  const index = labs.findIndex((item) => item.id === id);

  if (index >= 0) {
    labs[index] = lab;
  } else {
    labs.push(lab);
  }

  if (saveData(KEYS.labs, labs)) {
    clearLabForm();
    renderLabs();
    toast(index >= 0 ? "Lab experiment updated successfully." : "Lab experiment saved successfully.");
  }
}

function clearLabForm() {
  document.getElementById("labEditId").value = "";
  document.getElementById("labCode").value = "";
  document.getElementById("labSampleOutput").value = "";
  document.getElementById("labOriginalOutput").value = "";
  document.getElementById("labResult").value = "";
  document.getElementById("executionConsole").textContent = "Ready to run code.";
  updateLineNumbers();
}

function renderLabs() {
  const labs = getData(KEYS.labs, []);
  const list = document.getElementById("labList");

  if (!labs.length) {
    list.innerHTML = `<div class="empty-state">No saved coding experiments yet. Use the Coding Workspace and choose Save Experiment.</div>`;
    updateStatistics();
    return;
  }

  list.innerHTML = labs.map((lab) => `
    <article class="list-item">
      <div class="list-item-title">
        <i class="fa-solid fa-flask"></i>
        <span>${escapeHTML(lab.number)}: ${escapeHTML(lab.title)}</span>
      </div>
      <small>${escapeHTML(lab.language || "Document")} · ${formatDate(lab.createdAt)}</small>
      <div class="list-actions">
        <button class="icon-btn lab-view" data-id="${lab.id}" title="View"><i class="fa-solid fa-eye"></i></button>
        <button class="icon-btn lab-download" data-id="${lab.id}" title="Download"><i class="fa-solid fa-download"></i></button>
        <button class="icon-btn lab-edit" data-id="${lab.id}" title="Edit"><i class="fa-solid fa-pen"></i></button>
        <button class="icon-btn lab-options" data-id="${lab.id}" title="Options"><i class="fa-solid fa-ellipsis"></i></button>
      </div>
    </article>
  `).join("");

  list.querySelectorAll(".lab-view").forEach((button) => {
    button.addEventListener("click", () => viewLab(button.dataset.id));
  });

  list.querySelectorAll(".lab-download").forEach((button) => {
    button.addEventListener("click", () => downloadLab(button.dataset.id));
  });

  list.querySelectorAll(".lab-edit").forEach((button) => {
    button.addEventListener("click", () => editLab(button.dataset.id));
  });

  list.querySelectorAll(".lab-options").forEach((button) => {
    button.addEventListener("click", () => toast("Options: edit, view, or download this experiment."));
  });

  updateStatistics();
}

function viewLab(id) {
  const lab = getData(KEYS.labs, []).find((item) => item.id === id);
  if (!lab) return;

  if (lab.attachment?.data) {
    previewStoredFile(lab.attachment, lab.title);
    return;
  }

  const file = {
    name: `${lab.title}.txt`,
    type: "text/plain",
    data: `Experiment Number: ${lab.number}\nTitle: ${lab.title}\n\nObjective:\n${lab.objective}\n\nTheory:\n${lab.theory}\n\nAlgorithm:\n${lab.algorithm}\n\nLanguage: ${lab.language}\n\nCode:\n${lab.code}\n\nSample Output:\n${lab.sampleOutput}\n\nOriginal Output:\n${lab.originalOutput}\n\nResult:\n${lab.result}`
  };

  previewStoredFile(file, lab.title);
}

function downloadLab(id) {
  const lab = getData(KEYS.labs, []).find((item) => item.id === id);
  if (!lab) return;

  if (lab.attachment?.data) {
    downloadStoredFile(lab.attachment);
    return;
  }

  const text = `Experiment Number: ${lab.number}
Title: ${lab.title}

Objective:
${lab.objective}

Theory:
${lab.theory}

Algorithm:
${lab.algorithm}

Language: ${lab.language}

Code:
${lab.code}

Sample Output:
${lab.sampleOutput}

Original Output:
${lab.originalOutput}

Result:
${lab.result}`;

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${lab.title.replace(/\s+/g, "_")}_experiment.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function editLab(id) {
  const lab = getData(KEYS.labs, []).find((item) => item.id === id);
  if (!lab) return;

  document.getElementById("labEditId").value = lab.id;
  document.getElementById("languageSelect").value = lab.language || "Python";
  document.getElementById("labCode").value = lab.code || "";
  document.getElementById("labSampleOutput").value = lab.sampleOutput || "";
  document.getElementById("labOriginalOutput").value = lab.originalOutput || "";
  document.getElementById("labResult").value = lab.result || "";
  updateLineNumbers();

  toast("Experiment loaded into the editor.");
  window.scrollTo({ top: document.getElementById("labs").offsetTop, behavior: "smooth" });
}

function runDemoCode() {
  const language = document.getElementById("languageSelect").value;
  const code = document.getElementById("labCode").value;
  const consolePanel = document.getElementById("executionConsole");
  const sampleOutput = document.getElementById("labSampleOutput");
  const originalOutput = document.getElementById("labOriginalOutput");

  if (!code.trim()) {
    consolePanel.textContent = "Write code before running it.";
    originalOutput.value = "";
    return;
  }

  if (language !== "Python") {
    consolePanel.textContent = `${language} demonstration:\nFull execution requires a backend compiler or an external online compiler API.\nYour code has not been sent anywhere.`;
    originalOutput.value = "";
    return;
  }

  try {
    const output = [];
    const lines = code.split("\n");

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("print(") && trimmed.endsWith(")")) {
        let value = trimmed.slice(6, -1).trim();

        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          output.push(value.slice(1, -1));
        } else if (/^[0-9+\-*/().\s]+$/.test(value)) {
          output.push(String(Function(`"use strict"; return (${value})`)()));
        } else {
          output.push(`[demo output] ${value}`);
        }
      }
    });

    const result = output.length
      ? output.join("\n")
      : "No output produced. This browser demo supports basic print(...) statements and arithmetic.";
    consolePanel.textContent = result;
    originalOutput.value = result;
    if (!sampleOutput.value.trim() && output.length) {
      sampleOutput.value = result;
    }
  } catch (error) {
    const message = `Demo error: ${error.message}`;
    consolePanel.textContent = message;
    originalOutput.value = message;
  }
}

function clearCodeEditor() {
  document.getElementById("labCode").value = "";
  document.getElementById("executionConsole").textContent = "Code editor cleared.";
  updateLineNumbers();
  toast("Code editor cleared.");
}

async function copyCode() {
  const code = document.getElementById("labCode").value;

  try {
    await navigator.clipboard.writeText(code);
    toast("Code copied to clipboard.");
  } catch {
    toast("Clipboard access is unavailable in this browser.");
  }
}

function downloadCode() {
  const language = document.getElementById("languageSelect").value;
  const code = document.getElementById("labCode").value;
  const extensions = { Python: "py", Java: "java", C: "c", "C++": "cpp", R: "r" };

  const blob = new Blob([code], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `lab_code.${extensions[language]}`;
  link.click();
  URL.revokeObjectURL(url);
  toast("Code downloaded successfully.");
}

/* -----------------------------
   Assignments

function bindAssignmentFeatures() {
  document.getElementById("assignmentForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("assignmentTitle").value.trim();
    const subject = document.getElementById("assignmentSubject").value.trim();

    if (!title || !subject) {
      toast("Enter the assignment title and subject.");
      return;
    }

    const editId = document.getElementById("assignmentEditId").value;
    const assignments = getData(KEYS.assignments, []);
    const oldAssignment = assignments.find((assignment) => assignment.id === editId);

    const assignment = {
      id: editId || uid(),
      title,
      subject,
      dueDate: document.getElementById("assignmentDueDate").value,
      description: document.getElementById("assignmentDescription").value.trim(),
      status: document.getElementById("assignmentStatus").value,
      file: oldAssignment?.file || null,
      createdAt: oldAssignment?.createdAt || new Date().toISOString()
    };

    const index = assignments.findIndex((item) => item.id === assignment.id);
    if (index >= 0) assignments[index] = assignment;
    else assignments.push(assignment);

    if (saveData(KEYS.assignments, assignments)) {
      event.target.reset();
      document.getElementById("assignmentEditId").value = "";
      toast(index >= 0 ? "Assignment updated successfully." : "Assignment saved successfully.");
    }
  });
}

function renderAssignments() {
  const assignments = getData(KEYS.assignments, []);
  const container = document.getElementById("assignmentList");

  if (!assignments.length) {
    container.innerHTML = `<div class="empty-state">No assignments created yet.</div>`;
    updateStatistics();
    return;
  }

  container.innerHTML = assignments.map((assignment) => `
    <article class="content-card">
      <div class="tag-row">
        <span class="tag">${escapeHTML(assignment.subject)}</span>
        <span class="tag status-${assignment.status.toLowerCase().replaceAll(" ", "-")}">${escapeHTML(assignment.status)}</span>
      </div>
      <h3>${escapeHTML(assignment.title)}</h3>
      <p>${escapeHTML(assignment.description || "No description added.")}</p>
      <p class="card-meta"><strong>Due date:</strong> ${assignment.dueDate ? formatDate(assignment.dueDate) : "Not set"}</p>
      <div class="action-row">
        <button class="btn btn-outline assignment-view" data-id="${assignment.id}">View</button>
        <button class="btn btn-outline assignment-download" data-id="${assignment.id}">Download</button>
        <button class="icon-btn assignment-edit" data-id="${assignment.id}" title="Edit"><i class="fa-solid fa-pen"></i></button>
        <button class="icon-btn assignment-options" data-id="${assignment.id}" title="Options"><i class="fa-solid fa-ellipsis"></i></button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".assignment-view").forEach((button) => {
    button.addEventListener("click", () => viewAssignment(button.dataset.id));
  });

  container.querySelectorAll(".assignment-download").forEach((button) => {
    button.addEventListener("click", () => {
      const assignment = assignments.find((item) => item.id === button.dataset.id);
      downloadStoredFile(assignment?.file);
    });
  });

  container.querySelectorAll(".assignment-edit").forEach((button) => {
    button.addEventListener("click", () => editAssignment(button.dataset.id));
  });

  container.querySelectorAll(".assignment-options").forEach((button) => {
    button.addEventListener("click", () => toast("Options: view, download, or edit this assignment."));
  });

  updateStatistics();
}

function viewAssignment(id) {
  const assignment = getData(KEYS.assignments, []).find((item) => item.id === id);
  if (!assignment) return;

  if (assignment.file?.data) {
    previewStoredFile(assignment.file, assignment.title);
    return;
  }

  previewStoredFile({
    name: `${assignment.title}.txt`,
    type: "text/plain",
    data: `Assignment: ${assignment.title}\nSubject: ${assignment.subject}\nDue Date: ${assignment.dueDate || "Not set"}\nStatus: ${assignment.status}\n\nDescription:\n${assignment.description}`
  }, assignment.title);
}

function editAssignment(id) {
  const assignment = getData(KEYS.assignments, []).find((item) => item.id === id);
  if (!assignment) return;

  document.getElementById("assignmentEditId").value = assignment.id;
  document.getElementById("assignmentTitle").value = assignment.title;
  document.getElementById("assignmentSubject").value = assignment.subject;
  document.getElementById("assignmentDueDate").value = assignment.dueDate;
  document.getElementById("assignmentDescription").value = assignment.description;
  document.getElementById("assignmentStatus").value = assignment.status;

  toast("Assignment loaded for editing.");
  window.scrollTo({ top: document.getElementById("assignments").offsetTop, behavior: "smooth" });
}

/* -----------------------------
   Tools and Resources
------------------------------ */

function bindToolAndResourceFilters() {
  ["toolSearch", "toolCategoryFilter"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderTools);
    document.getElementById(id).addEventListener("change", renderTools);
  });

  ["resourceSearch", "resourceLanguageFilter", "resourceTypeFilter"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderResources);
    document.getElementById(id).addEventListener("change", renderResources);
  });
}

function renderTools() {
  const search = document.getElementById("toolSearch").value.toLowerCase().trim();
  const category = document.getElementById("toolCategoryFilter").value;

  const filtered = tools.filter((tool) => {
    const matchesSearch = `${tool.name} ${tool.description} ${tool.category}`.toLowerCase().includes(search);
    const matchesCategory = category === "All" || tool.category === category;
    return matchesSearch && matchesCategory;
  });

  const container = document.getElementById("toolList");

  container.innerHTML = filtered.length ? filtered.map((tool) => `
    <article class="content-card">
      <i class="${tool.icon}" style="font-size: 2.2rem; color: var(--cyan-dark);"></i>
      <div class="tag-row"><span class="tag">${escapeHTML(tool.category)}</span></div>
      <h3>${escapeHTML(tool.name)}</h3>
      <p>${escapeHTML(tool.description)}</p>
      <div class="action-row">
        <a class="btn btn-primary" href="${tool.url}" target="_blank" rel="noopener">Open Tool</a>
        <a class="btn btn-outline" href="${tool.docs}" target="_blank" rel="noopener">Documentation</a>
      </div>
    </article>
  `).join("") : `<div class="empty-state">No tools match the current search or category filter.</div>`;
}

function renderResources() {
  const search = document.getElementById("resourceSearch").value.toLowerCase().trim();
  const language = document.getElementById("resourceLanguageFilter").value;
  const type = document.getElementById("resourceTypeFilter").value;

  const filtered = resources.filter((resource) => {
    const matchesSearch = `${resource.title} ${resource.description} ${resource.language} ${resource.type}`.toLowerCase().includes(search);
    const matchesLanguage = language === "All" || resource.language === language;
    const matchesType = type === "All" || resource.type === type;
    return matchesSearch && matchesLanguage && matchesType;
  });

  const container = document.getElementById("resourceList");

  container.innerHTML = filtered.length ? filtered.map((resource) => `
    <article class="content-card">
      <div class="tag-row">
        <span class="tag">${escapeHTML(resource.language)}</span>
        <span class="tag">${escapeHTML(resource.type)}</span>
      </div>
      <h3>${escapeHTML(resource.title)}</h3>
      <p>${escapeHTML(resource.description)}</p>
      <div class="action-row">
        <button class="btn btn-outline resource-view" data-url="${resource.url}" data-title="${escapeHTML(resource.title)}">View Resource</button>
        <a class="btn btn-primary" href="${resource.url}" target="_blank" rel="noopener">Open in New Tab</a>
      </div>
    </article>
  `).join("") : `<div class="empty-state">No resources match the current search and filters.</div>`;

  container.querySelectorAll(".resource-view").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("modalTitle").textContent = button.dataset.title;
      document.getElementById("modalBody").innerHTML = `
        <iframe src="${button.dataset.url}" title="${button.dataset.title}"></iframe>
        <p style="padding: 0 12px;">If the website blocks embedded viewing, use “Open in New Tab.”</p>
      `;
      document.getElementById("previewModal").classList.remove("hidden");
    });
  });
}

/* -----------------------------
   Profile
------------------------------ */

function bindProfileFeatures() {
  document.getElementById("editProfileBtn").addEventListener("click", () => {
    const editForm = document.getElementById("profileEditForm");
    const display = document.getElementById("profileDisplayFields");

    editForm.classList.toggle("hidden");
    display.classList.toggle("hidden");

    if (!editForm.classList.contains("hidden")) loadProfileIntoForm();
  });

  document.getElementById("profileEditForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const profile = {
      fullName: document.getElementById("editFullName").value.trim(),
      registration: document.getElementById("editRegistration").value.trim(),
      department: document.getElementById("editDepartment").value.trim(),
      section: document.getElementById("editSection").value.trim(),
      subject: document.getElementById("editSubject").value.trim(),
      faculty: document.getElementById("editFaculty").value.trim(),
      github: document.getElementById("editGithub").value.trim(),
      linkedin: document.getElementById("editLinkedin").value.trim(),
      email: document.getElementById("editEmail").value.trim()
    };

    saveData(KEYS.profile, profile);
    document.getElementById("profileEditForm").classList.add("hidden");
    document.getElementById("profileDisplayFields").classList.remove("hidden");
    renderProfile();
    toast("Profile details saved successfully.");
  });

}

function getProfile() {
  return { ...defaultProfile, ...getData(KEYS.profile, {}) };
}

function renderProfile() {
  const profile = getProfile();

  document.getElementById("profileNameDisplay").textContent = profile.fullName;
  document.getElementById("profileDeptDisplay").textContent = profile.department;

  document.getElementById("profileDisplayFields").innerHTML = `
    <div class="profile-detail-row"><strong>Full Name</strong><span>${escapeHTML(profile.fullName)}</span></div>
    <div class="profile-detail-row"><strong>Registration Number</strong><span>${escapeHTML(profile.registration)}</span></div>
    <div class="profile-detail-row"><strong>Department</strong><span>${escapeHTML(profile.department)}</span></div>
    <div class="profile-detail-row"><strong>Section</strong><span>${escapeHTML(profile.section)}</span></div>
    <div class="profile-detail-row"><strong>Subject</strong><span>${escapeHTML(profile.subject)}</span></div>
    <div class="profile-detail-row"><strong>Faculty Name</strong><span>${escapeHTML(profile.faculty)}</span></div>
    <div class="profile-detail-row">
      <strong>Connect</strong>
      <div class="profile-social-links">
        <a class="profile-social-link" href="${escapeHTML(profile.github)}" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" title="GitHub">
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>
        <a class="profile-social-link" href="${escapeHTML(profile.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" title="LinkedIn">
          <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a class="profile-social-link" href="mailto:${escapeHTML(profile.email)}" aria-label="Send email" title="Email">
          <i class="fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  `;
}

function loadProfileIntoForm() {
  const profile = getProfile();

  document.getElementById("editFullName").value = profile.fullName;
  document.getElementById("editRegistration").value = profile.registration;
  document.getElementById("editDepartment").value = profile.department;
  document.getElementById("editSection").value = profile.section;
  document.getElementById("editSubject").value = profile.subject;
  document.getElementById("editFaculty").value = profile.faculty;
  document.getElementById("editGithub").value = profile.github;
  document.getElementById("editLinkedin").value = profile.linkedin;
  document.getElementById("editEmail").value = profile.email;
}

/* -----------------------------
   Render Everything and Stats
------------------------------ */

function renderAll() {
  renderIdentityStatus();
  renderModules();
  renderLabs();
  renderTools();
  renderResources();
  renderProfile();
  updateStatistics();
}

function updateStatistics() {
  document.getElementById("moduleCount").textContent = getData(KEYS.modules, []).length;
  document.getElementById("labCount").textContent = getData(KEYS.labs, []).length;
  document.getElementById("assignmentCount").textContent = getData(KEYS.assignments, []).length;
}