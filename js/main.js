/* CitySmile Dental Studio - shared site script */
(function () {
  "use strict";

  /* ---------- Treatment data (from the CitySmile content pack) ---------- */
  var TREATMENTS = [
    {
      slug: "checkup-and-clean", name: "Dental Checkup and Clean", price: "Rs 3,500",
      note: "Full exam, scale and polish",
      short: "Full exam, scale, polish and oral health advice.",
      suits: "Everyone, every six months. It is also a good first visit if you have not seen a dentist for a while.",
      steps: ["We examine your teeth, gums and mouth.", "X rays are taken only if they are needed.", "We scale away tartar and polish your teeth smooth.", "We share oral health advice and agree any next steps, with prices, together."]
    },
    {
      slug: "teeth-whitening", name: "Teeth Whitening", price: "Rs 18,000",
      note: "One professional session",
      short: "One session of professional whitening, up to several shades brighter.",
      suits: "Adults with healthy teeth who want a brighter smile for an event, photos or a fresh start.",
      steps: ["We check your teeth and gums first, to make sure whitening is right for you.", "Your gums and lips are protected before we begin.", "Whitening gel is applied and activated while you sit in the chair.", "We show you the shade change and explain how to keep it bright."]
    },
    {
      slug: "dental-filling", name: "Dental Filling", price: "Rs 4,500",
      note: "Per tooth",
      short: "Tooth coloured filling for cavities, per tooth.",
      suits: "Anyone with a cavity, a chipped tooth, or an old filling that needs replacing.",
      steps: ["We numb the area so you feel no pain.", "The decayed part of the tooth is cleaned out.", "A tooth coloured filling is placed and shaped to match your bite.", "We polish the filling and check that your bite feels natural."]
    },
    {
      slug: "root-canal", name: "Root Canal Treatment", price: "Rs 15,000",
      note: "Per tooth, includes X ray and filling",
      short: "Root canal treatment per tooth, includes X ray and filling.",
      suits: "A tooth with deep decay or ongoing pain that you want to save rather than remove.",
      steps: ["An X ray shows the shape of the roots.", "We numb the tooth and clean out the infected pulp.", "The canals are disinfected, sealed and filled.", "The tooth is rebuilt with a filling, and a crown is advised if the tooth needs one."]
    },
    {
      slug: "dental-crown", name: "Dental Crown", price: "Rs 22,000",
      note: "Per tooth",
      short: "Strong, natural looking crown, per tooth.",
      suits: "A weak, cracked or heavily filled tooth that needs strength and a natural look.",
      steps: ["We shape the tooth and take a precise mould or scan.", "A temporary crown protects the tooth while yours is made.", "Your custom crown is fitted, adjusted and cemented.", "We check the bite and the colour match with your other teeth."]
    },
    {
      slug: "dental-implant", name: "Dental Implant", price: "Rs 85,000",
      note: "Full implant with crown, per tooth",
      short: "Full implant with crown, per tooth.",
      suits: "Anyone missing a tooth who wants a fixed replacement that feels like their own.",
      steps: ["We assess your jaw with X rays and plan the implant position.", "The titanium implant is placed under local anaesthetic.", "After healing, an abutment and a custom crown are fitted.", "We review the bite and show you how to care for your implant."]
    },
    {
      slug: "braces", name: "Braces (Orthodontics)", price: "Rs 120,000",
      note: "Full course, monthly plan available",
      short: "Metal braces, full course. Monthly plan available.",
      suits: "Teenagers and adults with crooked, crowded or gappy teeth.",
      steps: ["We assess your teeth and take records and X rays.", "Brackets and wires are fitted in one longer visit.", "You visit every 4 to 6 weeks for small adjustments.", "At the end, retainers keep your new smile in place."]
    },
    {
      slug: "clear-aligners", name: "Clear Aligners", price: "Rs 250,000",
      note: "Full course of near invisible trays",
      short: "Near invisible trays, full course.",
      suits: "Adults who want straighter teeth without visible braces, and can wear trays through the day.",
      steps: ["We scan your teeth and plan every movement digitally.", "You receive a series of clear trays, changed every 1 to 2 weeks.", "Short review visits check that your teeth are on track.", "Retainers at the end hold your result in place."]
    },
    {
      slug: "veneers", name: "Veneers", price: "Rs 28,000",
      note: "Per tooth",
      short: "Veneers per tooth, for shape and colour correction.",
      suits: "Front teeth that are chipped, stained or uneven and need a shape or colour fix.",
      steps: ["We plan your new smile shape and shade together with you.", "A thin layer is prepared on the front of the tooth.", "Your custom veneers are made in the lab.", "The veneers are tried in, adjusted and bonded in place."]
    },
    {
      slug: "tooth-extraction", name: "Tooth Extraction", price: "Rs 5,000",
      note: "Per tooth, under local anaesthetic",
      short: "Simple extraction under local anaesthetic.",
      suits: "A tooth that is too damaged to save, or a loose tooth that is causing pain.",
      steps: ["We numb the area fully and check that you feel no pain.", "The tooth is loosened and removed gently.", "We clean the socket and place gauze to help healing.", "You get clear aftercare instructions and pain relief advice."]
    },
    {
      slug: "wisdom-tooth-removal", name: "Wisdom Tooth Removal", price: "Rs 18,000",
      note: "Per tooth, surgical removal",
      short: "Surgical removal of a wisdom tooth, per tooth.",
      suits: "Wisdom teeth that are impacted, painful or repeatedly infected.",
      steps: ["An X ray shows the tooth position and the shape of the roots.", "Under local anaesthetic, the tooth is removed surgically.", "Stitches are placed if needed, and healing is reviewed.", "You get aftercare guidance for the first week."]
    },
    {
      slug: "kids-dentistry", name: "Kids Dentistry", price: "Rs 2,500",
      note: "For children under 12",
      short: "Child checkup, fluoride and gentle cleaning for under 12s.",
      suits: "Children under 12, including nervous first time visitors. Parents can stay with their child during treatment.",
      steps: ["We meet your child and let them get comfortable in the chair.", "Teeth and gums are checked gently, counting teeth together.", "A gentle clean and fluoride treatment protect the teeth.", "We share brushing tips that you can use at home."]
    },
    {
      slug: "dentures", name: "Dentures", price: "Rs 35,000",
      note: "Partial or full set",
      short: "Partial or full dentures, made to fit comfortably.",
      suits: "Anyone missing several teeth who wants a removable, affordable replacement.",
      steps: ["We check your gums and take moulds of your mouth.", "A trial denture checks the fit, bite and look.", "Your final dentures are fitted and adjusted.", "We review comfort and show you how to clean and store them."]
    },
    {
      slug: "gum-treatment", name: "Gum Treatment", price: "Rs 6,000",
      note: "Per visit",
      short: "Deep cleaning for bleeding or swollen gums, per visit.",
      suits: "Anyone with bleeding, swollen or sore gums, or bad breath that will not shift.",
      steps: ["We measure the gum pockets around your teeth.", "Deep cleaning removes tartar above and below the gumline.", "The area is rinsed, and healing is checked at a review visit.", "We agree a home care routine to keep your gums healthy."]
    }
  ];

  function bySlug(slug) {
    for (var i = 0; i < TREATMENTS.length; i++) {
      if (TREATMENTS[i].slug === slug) return TREATMENTS[i];
    }
    return null;
  }
  function queryParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Services page: render all treatment cards ---------- */
  var servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    servicesGrid.innerHTML = TREATMENTS.map(function (t) {
      return '<article class="card treat-card">' +
        '<h3>' + t.name + '</h3><p>' + t.short + '</p><div class="spacer"></div>' +
        '<p class="price">From ' + t.price + '</p>' +
        '<a class="card-link" href="treatment.html?t=' + t.slug + '">See treatment details</a>' +
        '</article>';
    }).join("");
  }

  /* ---------- Home page: featured treatment cards ---------- */
  var featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) {
    var featured = ["checkup-and-clean", "teeth-whitening", "dental-implant", "braces", "kids-dentistry", "veneers"];
    featuredGrid.innerHTML = featured.map(function (slug) {
      var t = bySlug(slug);
      return '<article class="card treat-card">' +
        '<h3>' + t.name + '</h3><p>' + t.short + '</p><div class="spacer"></div>' +
        '<p class="price">From ' + t.price + '</p>' +
        '<a class="card-link" href="treatment.html?t=' + t.slug + '">See treatment details</a>' +
        '</article>';
    }).join("");
  }

  /* ---------- Pricing page: render table rows ---------- */
  var priceBody = document.getElementById("price-rows");
  if (priceBody) {
    priceBody.innerHTML = TREATMENTS.map(function (t) {
      return '<tr><td><span class="tname">' + t.name + '</span>' +
        '<span class="tdesc">' + t.short + '</span></td>' +
        '<td>' + t.note + '</td><td>From ' + t.price + '</td></tr>';
    }).join("");
  }

  /* ---------- Treatment detail page ---------- */
  var treatRoot = document.getElementById("treatment-detail");
  if (treatRoot) {
    var slug = queryParam("t");
    var t = bySlug(slug) || TREATMENTS[0];
    document.title = t.name + " | CitySmile Dental Studio";
    document.getElementById("t-name").textContent = t.name;
    document.getElementById("t-price-hero").textContent = "From " + t.price;
    document.getElementById("t-what").textContent = t.short + " Every treatment is explained before we begin, with the price agreed up front, so there are no surprises.";
    document.getElementById("t-suits").textContent = t.suits;
    document.getElementById("t-steps").innerHTML = t.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    document.getElementById("t-price-big").textContent = t.price;
    document.getElementById("t-price-note").textContent = t.note + ". The final price is always confirmed at your first visit, before any work begins.";
    document.getElementById("t-book").href = "book.html?t=" + t.slug;
    var chips = document.getElementById("t-chips");
    if (chips) {
      chips.innerHTML = TREATMENTS.map(function (x) {
        return '<a class="chip" href="treatment.html?t=' + x.slug + '">' + x.name + '</a>';
      }).join("");
    }
  }

  /* ---------- Booking form ---------- */
  var bookForm = document.getElementById("booking-form");
  if (bookForm) {
    var treatmentSelect = document.getElementById("bk-treatment");
    treatmentSelect.innerHTML = '<option value="">Choose a treatment</option>' + TREATMENTS.map(function (t) {
      return '<option value="' + t.name + '">' + t.name + ' (from ' + t.price + ')</option>';
    }).join("");
    var pre = bySlug(queryParam("t"));
    if (pre) treatmentSelect.value = pre.name;

    var dateInput = document.getElementById("bk-date");
    var today = new Date();
    var iso = today.toISOString().split("T")[0];
    dateInput.min = iso;

    var selectedSlot = "";
    var slotError = document.getElementById("slot-error");
    document.querySelectorAll(".slot").forEach(function (slot) {
      slot.addEventListener("click", function () {
        document.querySelectorAll(".slot").forEach(function (s) { s.classList.remove("selected"); });
        slot.classList.add("selected");
        selectedSlot = slot.getAttribute("data-slot");
        slotError.style.display = "none";
      });
    });

    function setInvalid(id, bad) {
      var field = document.getElementById(id);
      if (field) field.classList.toggle("invalid", bad);
      return !bad;
    }
    function fieldValue(id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : "";
    }

    bookForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      ok = setInvalid("f-name", fieldValue("bk-name") === "") && ok;
      var phone = fieldValue("bk-phone");
      ok = setInvalid("f-phone", phone.replace(/[^0-9]/g, "").length < 10) && ok;
      ok = setInvalid("f-treatment", treatmentSelect.value === "") && ok;
      ok = setInvalid("f-dentist", fieldValue("bk-dentist") === "") && ok;
      var dateVal = dateInput.value;
      var dateBad = dateVal === "";
      var sundayMsg = document.getElementById("date-sunday");
      if (!dateBad && dateVal) {
        var d = new Date(dateVal + "T12:00:00");
        if (d.getDay() === 0) { dateBad = true; sundayMsg.style.display = "block"; }
        else { sundayMsg.style.display = "none"; }
        if (dateVal < iso) dateBad = true;
      }
      ok = setInvalid("f-date", dateBad) && ok;
      if (selectedSlot === "") { slotError.style.display = "block"; ok = false; }
      if (!ok) {
        var firstBad = bookForm.querySelector(".field.invalid, #slot-error[style*='block']");
        if (firstBad) firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      var nice = new Date(dateVal + "T12:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      var ref = "CS-" + Math.floor(100000 + Math.random() * 900000);
      document.getElementById("cf-ref").textContent = ref;
      document.getElementById("cf-name").textContent = fieldValue("bk-name");
      document.getElementById("cf-treatment").textContent = treatmentSelect.value;
      document.getElementById("cf-dentist").textContent = fieldValue("bk-dentist");
      document.getElementById("cf-when").textContent = nice + " at " + selectedSlot;
      document.getElementById("cf-phone").textContent = phone;
      bookForm.style.display = "none";
      var success = document.getElementById("booking-success");
      success.style.display = "block";
      success.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- Contact form ---------- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; }
      function inv(id, bad) { var f = document.getElementById(id); if (f) f.classList.toggle("invalid", bad); return !bad; }
      var ok = true;
      ok = inv("ctf-name", val("ct-name") === "") && ok;
      var email = val("ct-email");
      ok = inv("ctf-email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) && ok;
      ok = inv("ctf-message", val("ct-message") === "") && ok;
      if (!ok) return;
      contactForm.reset();
      document.getElementById("contact-success").style.display = "block";
      document.getElementById("contact-success").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
