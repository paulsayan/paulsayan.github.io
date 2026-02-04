// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-research-papers",
              title: "Research Papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/research-papers/";
              },
            },{id: "dropdown-patents",
              title: "Patents",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/patents/";
              },
            },{id: "nav-awards-amp-recognition",
          title: "Awards &amp; Recognition",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards-and-recognition/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a partial CV containing only the additional information that is not available elsewhere on the site. For example, publications and awards have dedicated pages, so they are omitted here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "awards-finalist-in-aviation-amp-aerospace-inter-school-quiz-competition",
          title: 'Finalist 🏅 in Aviation &amp;amp; Aerospace Inter-School Quiz Competition',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2013/aerospace_quiz_finalist/";
            },},{id: "awards-ranked-3rd-in-intrusion-an-autonomous-robotics-competition-in-avenir-2015",
          title: 'Ranked 3rd 🥉 in Intrusion, an Autonomous Robotics Competition in Avenir 2015',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2015/robotics-competition-nsec-avenir-intrusion-3rd-place/";
            },},{id: "awards-ranked-2nd-in-walkaway-an-autonomous-robotics-competition-in-instruo-2016",
          title: 'Ranked 2nd 🥈 in Walkaway, an Autonomous Robotics Competition in Instruo 2016',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2016/robotics-competition-iieest-instruo-walkaway-2nd-place/";
            },},{id: "awards-ranked-324-th-top-0-3-of-99-473-participants-in-tcs-codevita-2017-global-coding-contest",
          title: 'Ranked 324-th (Top 0.3% of 99,473 participants) in TCS CodeVita 2017 (Global Coding...',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2017/tcs_codevita/";
            },},{id: "awards-ranked-3rd-in-following-an-autonomous-robotics-competition-in-phoenix-2017",
          title: 'Ranked 3rd 🥉 in Following, an Autonomous Robotics Competition in Phoenix 2017',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2017/robotics-competition-fiem-phoenix-following-3rd-place/";
            },},{id: "awards-ranked-1st-in-trackobot-an-autonomous-robotics-competition-in-prayukti-2017",
          title: 'Ranked 1st 🥇 in Trackobot, an Autonomous Robotics Competition in Prayukti 2017',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2017/robotics-competition-haldiatit-prayukti-trackobot-1st-place/";
            },},{id: "awards-ranked-2nd-in-trackmania-an-autonomous-robotics-competition-in-dakshh-2017",
          title: 'Ranked 2nd 🥈 in Trackmania, an Autonomous Robotics Competition in Dakshh 2017',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2017/robotics-competition-heritageit-dakshh-trackmania-2nd-place/";
            },},{id: "awards-ranked-1st-in-scout-an-autonomous-robotics-competition-in-instruo-2017",
          title: 'Ranked 1st 🥇 in Scout, an Autonomous Robotics Competition in Instruo 2017',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2017/robotics-competition-iieest-instruo-scout-1st-place/";
            },},{id: "awards-ranked-1st-in-tracker-an-autonomous-robotics-competition-in-innovacion-2018",
          title: 'Ranked 1st 🥇 in Tracker, an Autonomous Robotics Competition in Innovacion 2018',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2018/robotics-competition-iem-innovacion-tracker-1st-place/";
            },},{id: "awards-ranked-1st-in-matrix-an-autonomous-robotics-competition-in-srijan-2018",
          title: 'Ranked 1st 🥇 in Matrix, an Autonomous Robotics Competition in Srijan 2018',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2018/robotics-competition-ju-srijan-matrix-1st-place/";
            },},{id: "awards-ranked-1st-in-gridcity-an-autonomous-robotics-competition-in-avenir-2018",
          title: 'Ranked 1st 🥇 in Gridcity, an Autonomous Robotics Competition in Avenir 2018',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2018/robotics-competition-nsec-avenir-gridcity-1st-place/";
            },},{id: "awards-ranked-2nd-in-linetracer-an-autonomous-robotics-competition-in-avenir-2018",
          title: 'Ranked 2nd 🥈 in Linetracer, an Autonomous Robotics Competition in Avenir 2018',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2018/robotics-competition-nsec-avenir-linetracer-2nd-place/";
            },},{id: "awards-ranked-1st-in-wall-e-an-autonomous-robotics-competition-in-avenir-2018",
          title: 'Ranked 1st 🥇 in Wall-E, an Autonomous Robotics Competition in Avenir 2018',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2018/robotics-competition-nsec-avenir-walle-1st-place/";
            },},{id: "awards-ranked-1st-in-trackobot-an-autonomous-robotics-competition-in-techtrix-2018",
          title: 'Ranked 1st 🥇 in Trackobot, an Autonomous Robotics Competition in Techtrix 2018',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2018/robotics-competition-rccit-techtrix-trackobot-1st-place/";
            },},{id: "awards-invited-judge-for-an-autonomous-robotics-competition-at-an-annual-inter-school-fest-quot-euphoria-quot",
          title: 'Invited Judge for an Autonomous Robotics Competition at an annual inter-school fest &amp;quot;Euphoria&amp;quot;...',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2020/robotics-competition-bdmi-euphoria-invited-judge/";
            },},{id: "awards-best-demo-paper-award-industry-track-for-edge-centric-telepresence-avatar-robot-for-geographically-distributed-environment",
          title: 'Best Demo Paper Award 🏅 (Industry Track) for ”Edge-centric Telepresence Avatar Robot for...',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2020/icdcn-best-demo-paper/";
            },},{id: "awards-best-team-award-for-tcs-teledrive-telepresence-robotic-platform",
          title: 'Best Team Award for TCS Teledrive - Telepresence Robotic Platform',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2021/best-team-award-for-tcs-teledrive/";
            },},{id: "awards-ranked-1st-in-robotic-vision-scene-understanding-challenge-2022",
          title: 'Ranked 1st 🥇 in Robotic Vision Scene Understanding Challenge 2022',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2022/robotic-vision-scene-understanding-challenge-1st-place/";
            },},{id: "awards-finalist-top-25-teams-in-opencv-ai-competition-2022-spatial-ai-track",
          title: 'Finalist (Top-25 teams) in OpenCV AI Competition 2022 (Spatial-AI Track)',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2022/opencv-ai-competition-spatial-ai-track-finalist-top25-teams/";
            },},{id: "awards-ranked-2nd-in-robotic-vision-scene-understanding-challenge-2023",
          title: 'Ranked 2nd 🥈 in Robotic Vision Scene Understanding Challenge 2023',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2023/robotic-vision-scene-understanding-challenge-2nd-place/";
            },},{id: "awards-ranked-5th-top-0-5-of-943-teams-in-image-matching-challenge-kaggle-solo-gold-medal",
          title: 'Ranked 5th (Top 0.5% of 943 teams) in Image Matching Challenge | Kaggle...',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards-and-recognition/2025/image-matching-challenge-5th-place-gold-medal/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-XgsQ64AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sayan-paul", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9885-233X", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/sayanpaul_", "_blank");
        },
      },];
