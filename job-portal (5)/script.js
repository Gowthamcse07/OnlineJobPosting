// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  // Mock data for companies
  const mockCompanies = [
    {
      id: "google",
      name: "Google",
      logo: "/google2.png",
      industry: "Technology",
      size: "Large (10,000+ employees)",
      location: "Mountain View, CA",
      description: "A multinational technology company specializing in Internet-related services.",
      rating: 4.5,
      reviewCount: 12543,
      openJobs: 234,
      founded: 1998,
      website: "https://google.com",
      benefits: ["Health Insurance", "Stock Options", "Free Meals", "Gym"],
      culture: ["Innovation", "Collaboration", "Diversity"],
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: "/Microsoft.webp",
      industry: "Technology",
      size: "Large (10,000+ employees)",
      location: "Redmond, WA",
      description: "A leading technology company developing software and services.",
      rating: 4.3,
      reviewCount: 8932,
      openJobs: 189,
      founded: 1975,
      website: "https://microsoft.com",
      benefits: ["Health Insurance", "Stock Purchase Plan", "Flexible Work"],
      culture: ["Innovation", "Inclusion", "Respect"],
    },
    {
      id: "apple",
      name: "Apple",
      logo: "/apple.jpg",
      industry: "Technology",
      size: "Large (10,000+ employees)",
      location: "Cupertino, CA",
      description: "Designs and manufactures consumer electronics and software.",
      rating: 4.6,
      reviewCount: 15678,
      openJobs: 156,
      founded: 1976,
      website: "https://apple.com",
      benefits: ["Health Insurance", "Employee Discounts", "Stock Options"],
      culture: ["Innovation", "Excellence", "Privacy"],
    },
    {
      id: "netflix",
      name: "Netflix",
      logo: "/netflix.jpg",
      industry: "Entertainment",
      size: "Large (5,000-10,000 employees)",
      location: "Los Gatos, CA",
      description: "A streaming entertainment service with TV series and films.",
      rating: 4.4,
      reviewCount: 3421,
      openJobs: 78,
      founded: 1997,
      website: "https://netflix.com",
      benefits: ["Unlimited PTO", "Stock Options", "Health Insurance"],
      culture: ["Freedom", "Responsibility", "Innovation"],
    },
    {
      id: "spotify",
      name: "Spotify",
      logo: "/spotify.svg",
      industry: "Entertainment",
      size: "Medium (1,000-5,000 employees)",
      location: "Stockholm, Sweden",
      description: "A digital music streaming service giving access to millions of songs.",
      rating: 4.2,
      reviewCount: 2156,
      openJobs: 45,
      founded: 2006,
      website: "https://spotify.com",
      benefits: ["Health Insurance", "Spotify Premium", "Flexible Hours"],
      culture: ["Innovation", "Collaboration", "Passion"],
    },
    {
      id: "tesla",
      name: "Tesla",
      logo: "/Tesla-1.png",
      industry: "Automotive",
      size: "Large (10,000+ employees)",
      location: "Austin, TX",
      description: "Electric vehicles and clean energy company.",
      rating: 4.1,
      reviewCount: 5432,
      openJobs: 312,
      founded: 2003,
      website: "https://tesla.com",
      benefits: ["Stock Options", "Health Insurance", "Employee Discounts"],
      culture: ["Innovation", "Sustainability", "Excellence"],
    },
    {
      id: "amazon",
      name: "Amazon",
      logo: "/amazon.jpg",
      industry: "E-commerce",
      size: "Large (10,000+ employees)",
      location: "Seattle, WA",
      description: "Global e-commerce and cloud computing company.",
      rating: 4.0,
      reviewCount: 23456,
      openJobs: 567,
      founded: 1994,
      website: "https://amazon.com",
      benefits: ["Health Insurance", "Stock Options", "Career Development"],
      culture: ["Customer Obsession", "Innovation", "Ownership"],
    },
    {
      id: "meta",
      name: "Meta",
      logo: "/meta.png",
      industry: "Technology",
      size: "Large (10,000+ employees)",
      location: "Menlo Park, CA",
      description: "Social technology company connecting people worldwide.",
      rating: 4.2,
      reviewCount: 8765,
      openJobs: 234,
      founded: 2004,
      website: "https://meta.com",
      benefits: ["Health Insurance", "Stock Options", "Free Meals"],
      culture: ["Move Fast", "Be Bold", "Focus on Impact"],
    },
  ]

  // Mock job data for search functionality
  const mockJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "technology",
      salary: { min: 120000, max: 180000 },
      experience: "senior",
      remote: true,
      featured: true,
      urgent: false,
      skills: ["React", "TypeScript", "Node.js", "GraphQL", "Redux"],
      description:
        "We are looking for a Senior Frontend Developer to join our team and help build the next generation of web applications.",
      postedDate: "2024-01-15",
      applicants: 127,
      views: 1543,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full-time",
      category: "product",
      salary: { min: 140000, max: 200000 },
      experience: "mid",
      remote: false,
      featured: false,
      urgent: true,
      skills: ["Product Strategy", "Analytics", "Leadership", "Agile", "SQL"],
      description:
        "Join our product team to drive innovation and deliver exceptional user experiences across our platform.",
      postedDate: "2024-01-14",
      applicants: 89,
      views: 987,
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Full-time",
      category: "design",
      salary: { min: 110000, max: 160000 },
      experience: "mid",
      remote: true,
      featured: true,
      urgent: false,
      skills: ["Figma", "Prototyping", "Research", "UI Design", "User Testing"],
      description: "Create beautiful and intuitive user experiences for millions of users worldwide.",
      postedDate: "2024-01-13",
      applicants: 156,
      views: 2341,
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      type: "Full-time",
      category: "technology",
      salary: { min: 130000, max: 190000 },
      experience: "senior",
      remote: true,
      featured: false,
      urgent: false,
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
      description: "Use data to drive insights and improve recommendation algorithms for our streaming platform.",
      postedDate: "2024-01-12",
      applicants: 203,
      views: 1876,
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "Spotify",
      location: "New York, NY",
      type: "Full-time",
      category: "marketing",
      salary: { min: 90000, max: 130000 },
      experience: "mid",
      remote: false,
      featured: false,
      urgent: false,
      skills: ["Digital Marketing", "Analytics", "Campaign Management", "Social Media", "SEO"],
      description: "Lead marketing campaigns and drive user acquisition for our music streaming platform.",
      postedDate: "2024-01-11",
      applicants: 78,
      views: 654,
    },
    {
      id: 6,
      title: "Backend Engineer",
      company: "Tesla",
      location: "Austin, TX",
      type: "Full-time",
      category: "technology",
      salary: { min: 115000, max: 170000 },
      experience: "mid",
      remote: false,
      featured: false,
      urgent: true,
      skills: ["Java", "Microservices", "AWS", "Docker", "Kubernetes"],
      description: "Build scalable backend systems for our electric vehicle and energy products.",
      postedDate: "2024-01-10",
      applicants: 145,
      views: 1234,
    },
    {
      id: 7,
      title: "Junior Frontend Developer",
      company: "Airbnb",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "technology",
      salary: { min: 80000, max: 120000 },
      experience: "entry",
      remote: true,
      featured: false,
      urgent: false,
      skills: ["React", "JavaScript", "CSS", "HTML", "Git"],
      description: "Join our frontend team and help create amazing user experiences for travelers worldwide.",
      postedDate: "2024-01-09",
      applicants: 234,
      views: 3456,
    },
    {
      id: 8,
      title: "Sales Representative",
      company: "Salesforce",
      location: "Chicago, IL",
      type: "Full-time",
      category: "sales",
      salary: { min: 60000, max: 100000 },
      experience: "entry",
      remote: false,
      featured: false,
      urgent: false,
      skills: ["Sales", "CRM", "Communication", "Negotiation", "Lead Generation"],
      description: "Drive revenue growth by building relationships with potential customers and closing deals.",
      postedDate: "2024-01-08",
      applicants: 67,
      views: 543,
    },
  ]

  let currentJobs = [...mockJobs]
  let currentCompanies = [...mockCompanies]
  let currentFilters = {
    search: "",
    location: "",
    category: "",
    jobType: "",
    experience: "",
    salary: "",
    remote: false,
  }

  // Company filtering
  let companyFilters = {
    search: "",
    industry: "",
    size: "",
  }

  // Initialize page-specific functionality
  function initializePage() {
    const currentPage = window.location.pathname

    if (currentPage.includes("jobs.html") || document.querySelector(".jobs-list")) {
      initializeJobsPage()
    } else if (currentPage.includes("companies.html") || document.querySelector(".companies-list")) {
      initializeCompaniesPage()
    } else {
      initializeHomePage()
    }
  }

  function initializeJobsPage() {
    handleSearchAndFilters()
    updateJobListings(mockJobs)
    updateResultsCount(mockJobs.length)
  }

  function initializeCompaniesPage() {
    handleCompanyFilters()
    updateCompanyListings(mockCompanies)
    updateCompanyResultsCount(mockCompanies.length)
  }

  function initializeHomePage() {
    handleSearchAndFilters()
    // Initialize home page specific features
    if (document.querySelector(".jobs-grid")) {
      updateJobListings(mockJobs.slice(0, 6)) // Show only first 6 jobs on home page
    }
  }

  // Company filtering functionality
  function handleCompanyFilters() {
    const searchInputs = document.querySelectorAll('input[name="search"], input[name="company-search"]')
    const filterSelects = document.querySelectorAll('select[name="industry"], select[name="size"]')

    // Search input handling
    searchInputs.forEach((input) => {
      let debounceTimer
      input.addEventListener("input", () => {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          updateCompanyFilters()
          performCompanySearch()
        }, 300)
      })
    })

    // Filter select handling
    filterSelects.forEach((select) => {
      select.addEventListener("change", () => {
        updateCompanyFilters()
        performCompanySearch()
      })
    })
  }

  function updateCompanyFilters() {
    const searchInput = document.querySelector('input[name="search"], input[name="company-search"]')
    const industrySelect = document.querySelector('select[name="industry"]')
    const sizeSelect = document.querySelector('select[name="size"]')

    companyFilters = {
      search: searchInput?.value.toLowerCase() || "",
      industry: industrySelect?.value || "",
      size: sizeSelect?.value || "",
    }
  }

  function performCompanySearch() {
    showCompanyLoadingState()

    const filteredCompanies = mockCompanies.filter((company) => {
      // Search filter
      if (companyFilters.search) {
        const searchMatch =
          company.name.toLowerCase().includes(companyFilters.search) ||
          company.industry.toLowerCase().includes(companyFilters.search) ||
          company.description.toLowerCase().includes(companyFilters.search)

        if (!searchMatch) return false
      }

      // Industry filter
      if (companyFilters.industry && company.industry !== companyFilters.industry) {
        return false
      }

      // Size filter
      if (companyFilters.size && company.size !== companyFilters.size) {
        return false
      }

      return true
    })

    currentCompanies = filteredCompanies

    setTimeout(() => {
      updateCompanyListings(filteredCompanies)
      updateCompanyResultsCount(filteredCompanies.length)
      hideCompanyLoadingState()
      showCompanySearchFeedback(filteredCompanies.length)
    }, 500)
  }

  function updateCompanyListings(companies) {
    const companiesList = document.querySelector(".companies-list")
    if (!companiesList) return

    if (companies.length === 0) {
      companiesList.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <h3>No companies found</h3>
                    <p>Try adjusting your search criteria or filters to find more companies.</p>
                    <button class="btn btn-primary" onclick="clearAllCompanyFilters()">Clear All Filters</button>
                </div>
            `
      return
    }

    companiesList.innerHTML = companies.map((company) => createCompanyItemHTML(company)).join("")
    attachCompanyItemListeners()
  }

  function createCompanyItemHTML(company) {
    return `
            <div class="company-item" data-company-id="${company.id}">
                <div class="company-item-header">
                    <img src="${company.logo}" alt="${company.name}" class="company-logo">
                    <div class="company-item-info">
                        <h3>${company.name}</h3>
                        <div class="company-meta">
                            <span><i class="fas fa-industry"></i> ${company.industry}</span>
                            <span><i class="fas fa-users"></i> ${company.size}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${company.location}</span>
                        </div>
                        <div class="company-rating">
                            <div class="rating-stars">
                                <i class="fas fa-star"></i>
                                <span>${company.rating}</span>
                                <span class="review-count">(${company.reviewCount.toLocaleString()} reviews)</span>
                            </div>
                            <div class="open-jobs">
                                <i class="fas fa-briefcase"></i>
                                <span>${company.openJobs} open jobs</span>
                            </div>
                        </div>
                    </div>
                    <div class="company-item-actions">
                        <button class="btn-icon follow-btn" title="Follow Company" data-company-id="${company.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
                
                <div class="company-item-content">
                    <p class="company-description">${company.description}</p>
                    
                    <div class="company-details">
                        <div class="detail-item">
                            <strong>Founded:</strong> ${company.founded}
                        </div>
                        <div class="detail-item">
                            <strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a>
                        </div>
                    </div>

                    <div class="company-benefits">
                        <h4>Benefits & Perks</h4>
                        <div class="benefits-list">
                            ${company.benefits.map((benefit) => `<span class="benefit">${benefit}</span>`).join("")}
                        </div>
                    </div>

                    <div class="company-culture">
                        <h4>Company Culture</h4>
                        <div class="culture-list">
                            ${company.culture.map((value) => `<span class="culture-value">${value}</span>`).join("")}
                        </div>
                    </div>
                </div>

                <div class="company-item-footer">
                    <div class="company-actions">
                        <button class="btn btn-outline view-company-btn" data-company-id="${company.id}">View Company</button>
                        <button class="btn btn-primary view-jobs-btn" data-company-id="${company.id}">View Jobs (${company.openJobs})</button>
                    </div>
                </div>
            </div>
        `
  }

  function attachCompanyItemListeners() {
    // Follow buttons
    document.querySelectorAll(".follow-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation()
        const icon = this.querySelector("i")
        if (icon.classList.contains("far")) {
          icon.classList.remove("far")
          icon.classList.add("fas")
          this.style.color = "#ef4444"
          showNotification("Company followed!", "success")
        } else {
          icon.classList.remove("fas")
          icon.classList.add("far")
          this.style.color = "#64748b"
          showNotification("Company unfollowed", "info")
        }
      })
    })

    // View company buttons
    document.querySelectorAll(".view-company-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const companyId = this.dataset.companyId
        const company = mockCompanies.find((c) => c.id === companyId)
        if (company) {
          showCompanyModal(company)
        }
      })
    })

    // View jobs buttons
    document.querySelectorAll(".view-jobs-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const companyId = this.dataset.companyId
        const company = mockCompanies.find((c) => c.id === companyId)
        if (company) {
          window.location.href = `jobs.html?company=${company.name.toLowerCase()}`
        }
      })
    })
  }

  function updateCompanyResultsCount(count) {
    const resultsCount = document.querySelector(".company-results-count")
    if (resultsCount) {
      resultsCount.textContent = `${count.toLocaleString()} companies found`
    }
  }

  function showCompanyLoadingState() {
    const companiesList = document.querySelector(".companies-list")
    if (companiesList) {
      companiesList.classList.add("loading")
      companiesList.style.opacity = "0.6"
    }
  }

  function hideCompanyLoadingState() {
    const companiesList = document.querySelector(".companies-list")
    if (companiesList) {
      companiesList.classList.remove("loading")
      companiesList.style.opacity = "1"
    }
  }

  function showCompanySearchFeedback(count) {
    const hasActiveFilters = Object.values(companyFilters).some((filter) => filter !== "" && filter !== false)

    if (hasActiveFilters) {
      const message =
        count === 0
          ? "No companies match your search criteria"
          : `Found ${count} compan${count === 1 ? "y" : "ies"} matching your criteria`

      showNotification(message, count === 0 ? "info" : "success")
    }
  }

  function clearAllCompanyFilters() {
    document.querySelectorAll('input[type="text"], input[type="search"]').forEach((input) => {
      input.value = ""
    })

    document.querySelectorAll("select").forEach((select) => {
      select.selectedIndex = 0
    })

    companyFilters = {
      search: "",
      industry: "",
      size: "",
    }

    performCompanySearch()
    showNotification("All filters cleared", "info")
  }

  function showCompanyModal(company) {
    const modal = document.createElement("div")
    modal.className = "company-modal-overlay"
    modal.innerHTML = `
            <div class="company-modal">
                <div class="company-modal-header">
                    <div class="company-modal-title">
                        <div>
                            <h2>${company.name}</h2>
                            <p>${company.industry} • ${company.location}</p>
                        </div>
                    </div>
                    <button class="modal-close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="company-modal-content">
                    <div class="company-modal-stats">
                        <div class="stat-item">
                            <div class="stat-number">${company.rating}</div>
                            <div class="stat-label">Rating</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${company.openJobs}</div>
                            <div class="stat-label">Open Jobs</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${company.founded}</div>
                            <div class="stat-label">Founded</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">${company.reviewCount.toLocaleString()}</div>
                            <div class="stat-label">Reviews</div>
                        </div>
                    </div>
                    
                    <div class="company-modal-description">
                        <h4>About ${company.name}</h4>
                        <p>${company.description}</p>
                    </div>
                    
                    <div class="company-modal-benefits">
                        <h4>Benefits & Perks</h4>
                        <div class="benefits-grid">
                            ${company.benefits.map((benefit) => `<span class="benefit-item">${benefit}</span>`).join("")}
                        </div>
                    </div>
                    
                    <div class="company-modal-culture">
                        <h4>Company Culture</h4>
                        <div class="culture-grid">
                            ${company.culture.map((value) => `<span class="culture-item">${value}</span>`).join("")}
                        </div>
                    </div>
                </div>
                <div class="company-modal-footer">
                    <button class="btn btn-outline modal-close-btn">Close</button>
                    <a href="${company.website}" target="_blank" class="btn btn-outline">Visit Website</a>
                    <button class="btn btn-primary view-jobs-btn" data-company-id="${company.id}">View Jobs (${company.openJobs})</button>
                </div>
            </div>
        `

    document.body.appendChild(modal)
    document.body.style.overflow = "hidden"

    // Close modal functionality
    modal.querySelectorAll(".modal-close-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.body.removeChild(modal)
        document.body.style.overflow = "auto"
      })
    })

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal)
        document.body.style.overflow = "auto"
      }
    })

    // View jobs button in modal
    modal.querySelector(".view-jobs-btn").addEventListener("click", function () {
      const companyId = this.dataset.companyId
      const company = mockCompanies.find((c) => c.id === companyId)
      if (company) {
        window.location.href = `jobs.html?company=${company.name.toLowerCase()}`
      }
    })
  }

  // Enhanced search form handling for jobs
  function handleSearchAndFilters() {
    const searchForms = document.querySelectorAll(".search-form")
    const filterInputs = document.querySelectorAll(".filter-select, .checkbox-label input")

    // Search form submission
    searchForms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        performSearch()
      })
    })

    // Real-time filtering
    filterInputs.forEach((input) => {
      input.addEventListener("change", () => {
        updateFilters()
        performSearch()
      })
    })

    // Real-time search as user types (with debounce)
    const searchInputs = document.querySelectorAll('input[name="search"]')
    searchInputs.forEach((input) => {
      let debounceTimer
      input.addEventListener("input", () => {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          updateFilters()
          performSearch()
        }, 300)
      })
    })

    // Location search with debounce
    const locationInputs = document.querySelectorAll('input[name="location"]')
    locationInputs.forEach((input) => {
      let debounceTimer
      input.addEventListener("input", () => {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          updateFilters()
          performSearch()
        }, 300)
      })
    })
  }

  function updateFilters() {
    const searchInput = document.querySelector('input[name="search"]')
    const locationInput = document.querySelector('input[name="location"]')
    const categorySelect = document.querySelector('select[name="category"]')
    const jobTypeSelect = document.querySelector('select[name="job-type"]')
    const experienceSelect = document.querySelector('select[name="experience"]')
    const salarySelect = document.querySelector('select[name="salary"]')
    const remoteCheckbox = document.querySelector('input[name="remote"]')

    currentFilters = {
      search: searchInput?.value.toLowerCase() || "",
      location: locationInput?.value.toLowerCase() || "",
      category: categorySelect?.value || "",
      jobType: jobTypeSelect?.value || "",
      experience: experienceSelect?.value || "",
      salary: salarySelect?.value || "",
      remote: remoteCheckbox?.checked || false,
    }
  }

  function performSearch() {
    // Show loading state
    showLoadingState()

    // Filter jobs based on current filters
    const filteredJobs = mockJobs.filter((job) => {
      // Search filter (title, company, skills)
      if (currentFilters.search) {
        const searchMatch =
          job.title.toLowerCase().includes(currentFilters.search) ||
          job.company.toLowerCase().includes(currentFilters.search) ||
          job.skills.some((skill) => skill.toLowerCase().includes(currentFilters.search)) ||
          job.description.toLowerCase().includes(currentFilters.search)

        if (!searchMatch) return false
      }

      // Location filter
      if (currentFilters.location) {
        if (!job.location.toLowerCase().includes(currentFilters.location)) {
          return false
        }
      }

      // Category filter
      if (currentFilters.category && job.category !== currentFilters.category) {
        return false
      }

      // Job type filter
      if (
        currentFilters.jobType &&
        job.type.toLowerCase().replace("-", "") !== currentFilters.jobType.replace("-", "")
      ) {
        return false
      }

      // Experience filter
      if (currentFilters.experience && job.experience !== currentFilters.experience) {
        return false
      }

      // Salary filter
      if (currentFilters.salary) {
        const [minSalary, maxSalary] = currentFilters.salary
          .split("-")
          .map((s) => Number.parseInt(s.replace("+", "")) || Number.POSITIVE_INFINITY)
        if (maxSalary && job.salary.max < minSalary) return false
        if (minSalary && !maxSalary && job.salary.min < minSalary) return false
      }

      // Remote filter
      if (currentFilters.remote && !job.remote) {
        return false
      }

      return true
    })

    // Update current jobs
    currentJobs = filteredJobs

    // Update UI after a short delay to show loading
    setTimeout(() => {
      updateJobListings(filteredJobs)
      updateResultsCount(filteredJobs.length)
      hideLoadingState()

      // Show search feedback
      showSearchFeedback(filteredJobs.length)
    }, 500)
  }

  function updateJobListings(jobs) {
    const jobsList = document.querySelector(".jobs-list")
    const jobsGrid = document.querySelector(".jobs-grid")

    // Handle both list and grid layouts
    const container = jobsList || jobsGrid
    if (!container) return

    if (jobs.length === 0) {
      container.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>No jobs found</h3>
                    <p>Try adjusting your search criteria or filters to find more opportunities.</p>
                    <button class="btn btn-primary" onclick="clearAllFilters()">Clear All Filters</button>
                </div>
            `
      return
    }

    if (jobsList) {
      // List layout for jobs page
      container.innerHTML = jobs.map((job) => createJobItemHTML(job)).join("")
    } else if (jobsGrid) {
      // Grid layout for home page
      container.innerHTML = jobs.map((job) => createJobCardHTML(job)).join("")
    }

    // Re-attach event listeners for new job items
    attachJobItemListeners()
  }

  function createJobItemHTML(job) {
    const formatSalary = (min, max) => `$${min / 1000}K - $${max / 1000}K`
    const formatDate = (dateStr) => {
      const date = new Date(dateStr)
      const now = new Date()
      const diffTime = Math.abs(now - date)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays === 1) return "Posted 1 day ago"
      if (diffDays < 7) return `Posted ${diffDays} days ago`
      if (diffDays < 14) return "Posted 1 week ago"
      return `Posted ${Math.ceil(diffDays / 7)} weeks ago`
    }

    return `
            <div class="job-item ${job.featured ? "featured" : ""}" data-job-id="${job.id}">
                <div class="job-item-header">
                    <div class="job-item-info">
                        <h3>${job.title}</h3>
                        <div class="company-info">
                            <span class="company-name">${job.company}</span>
                            <div class="company-rating">
                                <i class="fas fa-star"></i>
                                <span>4.${Math.floor(Math.random() * 6) + 2}</span>
                                <span class="review-count">(${Math.floor(Math.random() * 1000) + 100} reviews)</span>
                            </div>
                        </div>
                        <div class="job-meta">
                            <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                            <span><i class="fas fa-clock"></i> ${job.type}</span>
                            <span><i class="fas fa-calendar"></i> ${formatDate(job.postedDate)}</span>
                        </div>
                    </div>
                    <div class="job-item-actions">
                        <button class="btn-icon favorite-btn" title="Save Job" data-job-id="${job.id}">
                            <i class="far fa-heart"></i>
                        </button>
                        <div class="salary">${formatSalary(job.salary.min, job.salary.max)}</div>
                    </div>
                </div>

                <div class="job-item-content">
                    <p class="job-description">${job.description}</p>
                    
                    <div class="job-tags">
                        ${job.featured ? '<span class="tag featured-tag">Featured</span>' : ""}
                        ${job.remote ? '<span class="tag remote-tag">Remote</span>' : ""}
                        ${job.urgent ? '<span class="tag urgent-tag">Urgent Hiring</span>' : ""}
                    </div>

                    <div class="skills">
                        ${job.skills
                          .slice(0, 5)
                          .map((skill) => `<span class="skill">${skill}</span>`)
                          .join("")}
                        ${job.skills.length > 5 ? `<span class="skill-more">+${job.skills.length - 5} more</span>` : ""}
                    </div>
                </div>

                <div class="job-item-footer">
                    <div class="job-stats">
                        <span><i class="fas fa-users"></i> ${job.applicants} applicants</span>
                        <span><i class="fas fa-eye"></i> ${job.views} views</span>
                    </div>
                    <div class="job-actions">
                        <button class="btn btn-outline view-details-btn" data-job-id="${job.id}">View Details</button>
                        <button class="btn btn-primary apply-btn" data-job-id="${job.id}">Apply Now</button>
                    </div>
                </div>
            </div>
        `
  }

  function createJobCardHTML(job) {
    const formatSalary = (min, max) => `$${min / 1000}K - $${max / 1000}K`
    const formatDate = (dateStr) => {
      const date = new Date(dateStr)
      const now = new Date()
      const diffTime = Math.abs(now - date)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays === 1) return "Posted 1 day ago"
      if (diffDays < 7) return `Posted ${diffDays} days ago`
      if (diffDays < 14) return "Posted 1 week ago"
      return `Posted ${Math.ceil(diffDays / 7)} weeks ago`
    }

    return `
            <div class="job-card ${job.featured ? "featured" : ""}" data-job-id="${job.id}">
                <div class="job-header">
                    <div class="job-info">
                        <h3>${job.title}</h3>
                        <div class="company-info">
                            <span class="company-name">${job.company}</span>
                            <div class="company-rating">
                                <i class="fas fa-star"></i>
                                <span>4.${Math.floor(Math.random() * 6) + 2}</span>
                            </div>
                        </div>
                        <div class="job-meta">
                            <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                            <span><i class="fas fa-clock"></i> ${job.type}</span>
                        </div>
                    </div>
                </div>
                
                <div class="job-details">
                    <div class="salary-tags">
                        <div class="salary">${formatSalary(job.salary.min, job.salary.max)}</div>
                        <div class="job-tags">
                            ${job.featured ? '<span class="tag featured-tag">Featured</span>' : ""}
                            ${job.remote ? '<span class="tag remote-tag">Remote</span>' : ""}
                            ${job.urgent ? '<span class="tag urgent-tag">Urgent</span>' : ""}
                        </div>
                    </div>
                    
                    <div class="skills">
                        ${job.skills
                          .slice(0, 3)
                          .map((skill) => `<span class="skill">${skill}</span>`)
                          .join("")}
                        ${job.skills.length > 3 ? `<span class="skill-more">+${job.skills.length - 3} more</span>` : ""}
                    </div>
                </div>
                
                <div class="job-footer">
                    <span class="posted-date">${formatDate(job.postedDate)}</span>
                    <div class="job-actions">
                        <span class="view-details">View Details</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        `
  }

  function attachJobItemListeners() {
    // Favorite buttons
    document.querySelectorAll(".favorite-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation()
        const icon = this.querySelector("i")
        if (icon.classList.contains("far")) {
          icon.classList.remove("far")
          icon.classList.add("fas")
          this.style.color = "#ef4444"
          showNotification("Job saved to favorites!", "success")
        } else {
          icon.classList.remove("fas")
          icon.classList.add("far")
          this.style.color = "#64748b"
          showNotification("Job removed from favorites", "info")
        }
      })
    })

    // Apply buttons
    document.querySelectorAll(".apply-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const jobId = this.dataset.jobId
        const job = mockJobs.find((j) => j.id == jobId)
        if (job) {
          showNotification(`Application started for ${job.title} at ${job.company}!`, "success")
          // Here you would typically redirect to application page
        }
      })
    })

    // View details buttons
    document.querySelectorAll(".view-details-btn, .job-card").forEach((btn) => {
      btn.addEventListener("click", function () {
        const jobId = this.dataset.jobId
        const job = mockJobs.find((j) => j.id == jobId)
        if (job) {
          showJobModal(job)
        }
      })
    })
  }

  function updateResultsCount(count) {
    const resultsCount = document.querySelector(".results-count")
    if (resultsCount) {
      resultsCount.textContent = `${count.toLocaleString()} jobs found`
    }
  }

  function showLoadingState() {
    const jobsList = document.querySelector(".jobs-list")
    const jobsGrid = document.querySelector(".jobs-grid")
    const container = jobsList || jobsGrid

    if (container) {
      container.classList.add("loading")
      container.style.opacity = "0.6"
    }
  }

  function hideLoadingState() {
    const jobsList = document.querySelector(".jobs-list")
    const jobsGrid = document.querySelector(".jobs-grid")
    const container = jobsList || jobsGrid

    if (container) {
      container.classList.remove("loading")
      container.style.opacity = "1"
    }
  }

  function showSearchFeedback(count) {
    const hasActiveFilters = Object.values(currentFilters).some((filter) => filter !== "" && filter !== false)

    if (hasActiveFilters) {
      const message =
        count === 0
          ? "No jobs match your search criteria"
          : `Found ${count} job${count === 1 ? "" : "s"} matching your criteria`

      showNotification(message, count === 0 ? "info" : "success")
    }
  }

  function clearAllFilters() {
    // Clear all form inputs
    document.querySelectorAll('input[type="text"], input[type="search"]').forEach((input) => {
      input.value = ""
    })

    document.querySelectorAll("select").forEach((select) => {
      select.selectedIndex = 0
    })

    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false
    })

    // Reset filters and perform search
    currentFilters = {
      search: "",
      location: "",
      category: "",
      jobType: "",
      experience: "",
      salary: "",
      remote: false,
    }

    performSearch()
    showNotification("All filters cleared", "info")
  }

  function showJobModal(job) {
    // Create and show job details modal
    const modal = document.createElement("div")
    modal.className = "job-modal-overlay"
    modal.innerHTML = `
            <div class="job-modal">
                <div class="job-modal-header">
                    <h2>${job.title}</h2>
                    <button class="modal-close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="job-modal-content">
                    <div class="job-modal-company">
                        <div>
                            <h3>${job.company}</h3>
                            <p>${job.location} • ${job.type}</p>
                        </div>
                    </div>
                    <div class="job-modal-description">
                        <h4>Job Description</h4>
                        <p>${job.description}</p>
                    </div>
                    <div class="job-modal-skills">
                        <h4>Required Skills</h4>
                        <div class="skills">
                            ${job.skills.map((skill) => `<span class="skill">${skill}</span>`).join("")}
                        </div>
                    </div>
                    <div class="job-modal-details">
                        <div class="detail-item">
                            <strong>Salary:</strong> $${job.salary.min / 1000}K - $${job.salary.max / 1000}K
                        </div>
                        <div class="detail-item">
                            <strong>Experience:</strong> ${job.experience} level
                        </div>
                        <div class="detail-item">
                            <strong>Remote:</strong> ${job.remote ? "Yes" : "No"}
                        </div>
                    </div>
                </div>
                <div class="job-modal-footer">
                    <button class="btn btn-outline modal-close-btn">Close</button>
                    <button class="btn btn-primary">Apply Now</button>
                </div>
            </div>
        `

    document.body.appendChild(modal)
    document.body.style.overflow = "hidden"

    // Close modal functionality
    modal.querySelectorAll(".modal-close-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.body.removeChild(modal)
        document.body.style.overflow = "auto"
      })
    })

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal)
        document.body.style.overflow = "auto"
      }
    })
  }

  function showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.innerHTML = `
            <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
            <span>${message}</span>
        `

    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.opacity = "0"
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }

  // Mobile navigation
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger && navMenu) {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      }
    })
  })

  // Form validation
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const requiredFields = form.querySelectorAll("[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.style.borderColor = "#ef4444"
        } else {
          field.style.borderColor = "#e2e8f0"
        }
      })

      // Email validation
      const emailFields = form.querySelectorAll('input[type="email"]')
      emailFields.forEach((field) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (field.value && !emailRegex.test(field.value)) {
          isValid = false
          field.style.borderColor = "#ef4444"
        }
      })

      if (!isValid) {
        e.preventDefault()
      }
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Category card click handling
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      const categoryName = this.querySelector("h3").textContent.toLowerCase()
      window.location.href = `jobs.html?category=${categoryName}`
    })
  })

  // Pagination handling
  document.querySelectorAll(".pagination a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all pagination links
      document.querySelectorAll(".pagination a").forEach((a) => a.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // Scroll to top of job listings
      const jobsContent = document.querySelector(".jobs-content")
      if (jobsContent) {
        jobsContent.scrollIntoView({ behavior: "smooth" })
      }
    })
  })

  // Scroll to top button
  const scrollToTopBtn = document.createElement("button")
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
  scrollToTopBtn.className = "scroll-to-top"
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `

  document.body.appendChild(scrollToTopBtn)

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "flex"
    } else {
      scrollToTopBtn.style.display = "none"
    }
  })

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Auto-complete for search inputs
  const searchInputs = document.querySelectorAll('input[placeholder*="Job title"], input[placeholder*="keywords"]')
  const jobTitles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Product Manager",
    "UX Designer",
    "UI Designer",
    "Data Scientist",
    "Software Engineer",
    "DevOps Engineer",
    "Marketing Manager",
    "Sales Representative",
    "Business Analyst",
    "Project Manager",
  ]

  searchInputs.forEach((input) => {
    input.addEventListener("input", function () {
      const value = this.value.toLowerCase()
      if (value.length > 2) {
        const suggestions = jobTitles.filter((title) => title.toLowerCase().includes(value))
        console.log("Suggestions:", suggestions)
      }
    })
  })

  // Initialize the appropriate page
  initializePage()

  // Make functions globally available for onclick handlers
  window.clearAllFilters = clearAllFilters
  window.clearAllCompanyFilters = clearAllCompanyFilters
})
