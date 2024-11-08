function sendMail() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_nhars0l", "template_1vre90n", this).then(
        function (response) {
          alert("Message sent successfully!");
        },
        function (error) {
          alert("Failed to send message.");
        }
      );
    });

  document
    .getElementById("job-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs
        .sendForm("service_nhars0l", "template_tksfm8a", this)
        .then(() => alert("Your application has been submitted successfully!"))
        .catch(() =>
          alert("Failed to submit your application. Please try again later.")
        );
    });
}

function firstAnimation() {
  gsap.from(".heroHeading,.heroParah,.brand,.hamburger", {
    y: 35,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
  });
}

function cursorAnimation() {
  let body = document.querySelector(".body");
  let cursor = document.querySelector(".cursor");
  body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
}

function hamburgerAnimation() {
  let tl = gsap.timeline();
  let ham = document.querySelector(".hamburger");

  tl.to(
    ".top",
    {
      rotation: 250,
      y: 20,
      transformOrigin: "0% 50%",
      duration: 0.5,
    },
    "a"
  );

  tl.to(
    ".bottom",
    {
      rotation: -65,
      y: 6,
      x: -1,
      transformOrigin: "0% 50%",
      duration: 0.5,
    },
    "a"
  );

  tl.to(
    ".navslide",
    {
      transform: "translateY(0%)",
    },
    "a"
  );

  tl.to(".job, .contact", {
    transform: "translateX(0%)",
    opacity: 1,
    duration: 0.4,
  });

  tl.pause();
  let play = 1;
  ham.addEventListener("click", () => {
    if (play == 1) {
      tl.play();
      play = 0;
    } else {
      tl.reverse();
      play = 1;
    }
  });
}

function scrollAnimation() {
  let scroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      start: "top 0%",
      end: "top -150%",
      scrub: 2,
      pin: true,
    },
  });

  scroll.to(
    ".section",
    {
      transform: "translateX(-300%)",
    },
    "b"
  );

  scroll.to(
    ".hero",
    {
      transform: "translateX(50%)",
      scale: 0,
      opacity: 0,
      duration: 0.1,
    },
    "b"
  );

  scroll.to(
    ".servicesHeading",
    {
      transform: "translateX(91%)",
    },
    "b"
  );

  scroll.from(
    ".footerA,.copyRight,.socialLinks",
    {
      transform: "translateY(600%)",
      delay: 0.005,
    },
    "b"
  );

  scroll.to(
    ".blur,.blur2",
    {
      backgroundColor: "#00ffff52",
      duration: 0.1,
    },
    "b"
  );
  scroll.to(
    ".blur,.blur2",
    {
      backgroundColor: "#bd2a40",
      duration: 0.2,
      delay: 0.3,
    },
    "b"
  );

  scroll.to(
    ".v-left",
    {
      rotate: 240,
      borderRadius: "40px 40px 0px 40px",
      backgroundColor: "#00ffff",
      duration: 0.06,
    },
    "b"
  );
  scroll.to(
    ".v-left",
    {
      rotate: 420,
      backgroundColor: "#ff0000",
      borderRadius: "0px 40px 40px 40px",
      duration: 0.08,
      delay: 0.3,
    },
    "b"
  );

  scroll.to(
    ".v-right",
    {
      rotate: 835,
      backgroundColor: "#ff0000",
      duration: 0.08,
      delay: 0.3,
    },
    "b"
  );
  scroll.to(
    ".v-right",
    {
      rotate: 475,
      backgroundColor: "#00ffff",
      duration: 0.06,
    },
    "b"
  );

  scroll.to(
    ".navslide",
    {
      background: "linear-gradient(to bottom, rgb(17, 17, 17), #ff000052)",
      duration: 0.2,
      delay: 0.3,
    },
    "b"
  );
  scroll.to(
    ".navslide",
    {
      background: "linear-gradient(to bottom, rgb(17, 17, 17), #00ffff52)",
      duration: 0.1,
    },
    "b"
  );

  scroll.to(
    ".form button i",
    {
      color: "#00ffff",
      duration: 0.06,
    },
    "b"
  );
  scroll.to(
    ".form button i",
    {
      color: "#ff0000",
      duration: 0.1,
      duration: 0.08,
      delay: 0.3,
    },
    "b"
  );
}

function boxAnimation() {
  document.querySelectorAll(".box").forEach((box) => {
    // Create a unique GSAP timeline for each box
    let tl = gsap.timeline({ paused: true });

    // Define the animation for the current box
    tl.to(box.querySelector("span"), {
      borderRadius: "40px 40px 0px 40px",
      duration: 0.2,
    });

    // Add event listeners to play and reverse the animation
    box.addEventListener("mouseenter", () => tl.play());
    box.addEventListener("mouseleave", () => tl.reverse());
  });
}

function jobAnimation() {
  let contact = document.querySelector(".job");
  contact.addEventListener("click", function () {
    gsap.to(".jobPage", {
      transform: "translateX(0%)",
    });
  });
  let contactBack = document.querySelector("#jobBack");
  contactBack.addEventListener("click", function () {
    gsap.to(".jobPage", {
      transform: "translateX(-100%)",
    });
  });

  gsap.to("#jobBack", {
    right: "5%",
    duration: 1,
    repeat: -1,
    yoyo: true,
  });
}

function contactAnimation() {
  let contact = document.querySelector(".contact");
  contact.addEventListener("click", function () {
    gsap.to(".contactPage", {
      transform: "translateX(0%)",
    });
  });
  let contactBack = document.querySelector("#contactBack");
  contactBack.addEventListener("click", function () {
    gsap.to(".contactPage", {
      transform: "translateX(100%)",
    });
  });

  gsap.to("#contactBack", {
    left: "5%",
    duration: 1,
    repeat: -1,
    yoyo: true,
  });
}

sendMail();
firstAnimation();
cursorAnimation();
hamburgerAnimation();
jobAnimation();
contactAnimation();
scrollAnimation();
boxAnimation();
