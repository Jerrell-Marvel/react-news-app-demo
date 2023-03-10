import { rest } from "msw";
import newsData from "../data/newsData.json";

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("https://api.spaceflightnewsapi.net/v3/articles/", (req, res, ctx) => {
    return res(ctx.json(newsData));
  }),
  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18120`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18120,
        title: "Mysterious Russian satellites are now breaking apart in low-Earth orbit",
        url: "https://arstechnica.com/science/2023/02/mysterious-russian-satellites-are-now-breaking-apart-in-low-earth-orbit/",
        imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2023/02/GettyImages-951256226.jpg",
        newsSite: "Arstechnica",
        summary: '"This suggests to me that perhaps these events are the result of a design error."',
        publishedAt: "2023-02-08T14:25:58.000Z",
        updatedAt: "2023-02-08T14:31:26.713Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18118`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18118,
        title: "NASA Awards Simulation and Software Technology Services Contract",
        url: "http://www.nasa.gov/press-release/nasa-awards-simulation-and-software-technology-services-contract",
        imageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa_meatball_1.jpg?itok=GPrBmBv4",
        newsSite: "NASA",
        summary:
          "NASA has awarded the Simulation and Software Technology III contract to CACI Federal of Chantilly, Virginia, to provide simulation and software technology support and related services for the agency’s Johnson Space Center in Houston.",
        publishedAt: "2023-02-07T21:41:00.000Z",
        updatedAt: "2023-02-07T21:41:32.914Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18116`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18116,
        title: "New York Students to Hear from NASA Astronaut Aboard Space Station",
        url: "http://www.nasa.gov/press-release/new-york-students-to-hear-from-nasa-astronaut-aboard-space-station",
        imageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/josh_cassada_on_iss.jpg?itok=x5JV-Kgv",
        newsSite: "NASA",
        summary: "Students from Dr. Martin Luther King Jr. School No. 9 in Rochester, New York, will have an opportunity this week to hear from a NASA astronaut aboard the International Space Station.",
        publishedAt: "2023-02-07T19:41:00.000Z",
        updatedAt: "2023-02-07T19:41:33.452Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18116`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18116,
        title: "New York Students to Hear from NASA Astronaut Aboard Space Station",
        url: "http://www.nasa.gov/press-release/new-york-students-to-hear-from-nasa-astronaut-aboard-space-station",
        imageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/josh_cassada_on_iss.jpg?itok=x5JV-Kgv",
        newsSite: "NASA",
        summary: "Students from Dr. Martin Luther King Jr. School No. 9 in Rochester, New York, will have an opportunity this week to hear from a NASA astronaut aboard the International Space Station.",
        publishedAt: "2023-02-07T19:41:00.000Z",
        updatedAt: "2023-02-07T19:41:33.452Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18115`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18115,
        title: "NASA's Aerospace Safety Advisory Panel Releases 2022 Annual Report",
        url: "http://www.nasa.gov/press-release/nasas-aerospace-safety-advisory-panel-releases-2022-annual-report-0",
        imageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/asap_2022_annual_report_cover_only.png?itok=g2yybR0q",
        newsSite: "NASA",
        summary:
          "The Aerospace Safety Advisory Panel (ASAP), an advisory committee that reports to NASA and Congress, issued its 2022 annual report Tuesday, Feb. 7, 2023, examining the agency’s safety performance, accomplishments, and challenges over the past year.",
        publishedAt: "2023-02-07T16:51:00.000Z",
        updatedAt: "2023-02-07T16:51:33.515Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18114`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18114,
        title: "Here’s why Europe is abandoning plans to fly aboard China’s space station",
        url: "https://arstechnica.com/science/2023/02/heres-why-europe-is-abandoning-plans-to-fly-aboard-chinas-space-station/",
        imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2023/02/GettyImages-1242803951.jpg",
        newsSite: "Arstechnica",
        summary: "Increasingly, the European Space Agency is aligned with NASA and the West.",
        publishedAt: "2023-02-07T13:51:29.000Z",
        updatedAt: "2023-02-07T14:01:27.100Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18117`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18117,
        title: "Perseverance completes sample return depot, Ingenuity continues flights",
        url: "https://www.nasaspaceflight.com/2023/02/mars2020-update/",
        imageUrl: "https://www.nasaspaceflight.com/wp-content/uploads/2023/02/PIA25681-1-copy-1170x639.jpeg",
        newsSite: "NASASpaceflight",
        summary: "As the two-year landing anniversary of NASA’s Perseverance rover and its small scouting helicopter Ingenuity draws near, the pair continue to explore Jezero Crater and unlock the many secrets of the red planet.",
        publishedAt: "2023-02-07T07:35:15.000Z",
        updatedAt: "2023-02-07T21:22:01.180Z",
        featured: false,
        launches: [
          {
            id: "c4db6995-f25f-4608-8eb9-ce95d5226af2",
            provider: "Launch Library 2",
          },
        ],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18119`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18119,
        title: "Stoke Space to build SpaceX Raptor engine’s first real competitor",
        url: "https://www.teslarati.com/stoke-space-spacex-starship-raptor-engine-competition/",
        imageUrl: "https://www.teslarati.com/wp-content/uploads/2023/02/FFSC-booster-engine-Feb-2023-Stoke-Space-ox-preburner-test-1-crop-c.jpg",
        newsSite: "Teslarati",
        summary: "Seattle startup Stoke Space has revealed plans to develop an efficient rocket engine similar to the Raptors that power SpaceX’s Starship. Formed...",
        publishedAt: "2023-02-07T01:51:35.000Z",
        updatedAt: "2023-02-08T01:51:41.788Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18108`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18108,
        title: "Using Hubble, researchers measure the mass of a single white dwarf for the first time",
        url: "https://www.nasaspaceflight.com/2023/02/white-dwarf-mass-measurement/",
        imageUrl: "https://www.nasaspaceflight.com/wp-content/uploads/2023/02/STScI-01GQQSM8R6G6ZGJNPF3FVDJN46-1170x943.png",
        newsSite: "NASASpaceflight",
        summary:
          "Of the trillions of stars scattered throughout the universe, one of the most common are the white dwarfs, which are the dormant, burned out, and leftover cores of low/medium mass stars. For decades, scientists have only measured the masses of white dwarfs within binary star systems. While these measurements provide insight into the true masses of white dwarfs, the measurements typically feature high amounts of uncertainty.",
        publishedAt: "2023-02-06T17:09:44.000Z",
        updatedAt: "2023-02-07T10:03:30.541Z",
        featured: false,
        launches: [
          {
            id: "9d2a03ff-1fb2-4519-bcdb-ba9f84e61d3d",
            provider: "Launch Library 2",
          },
        ],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18107`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18107,
        title: "NASA Invites Media to SpaceX’s 27th Resupply Launch to Space Station",
        url: "http://www.nasa.gov/press-release/nasa-invites-media-to-spacex-s-27th-resupply-launch-to-space-station",
        imageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/crs-27_image_for_advisory.jpeg?itok=LsAAsAts",
        newsSite: "NASA",
        summary:
          "Media accreditation is open for SpaceX’s 27th commercial resupply mission for NASA to the International Space Station. Liftoff of the SpaceX Dragon cargo spacecraft on a Falcon 9 rocket is targeted for no earlier than Friday, March 10, from Launch Complex 39A at NASA’s Kennedy Space Center in Florida.",
        publishedAt: "2023-02-06T16:11:00.000Z",
        updatedAt: "2023-02-06T16:40:25.908Z",
        featured: false,
        launches: [
          {
            id: "9a0216fd-811b-4e20-be0a-98e6c54859e4",
            provider: "Launch Library 2",
          },
        ],
        events: [],
      })
    );
  }),

  rest.get(`https://api.spaceflightnewsapi.net/v3/articles/18106`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 18106,
        title: "Major earthquake devastates areas of southern Turkey and northern Syria",
        url: "https://arstechnica.com/science/2023/02/major-earthquake-devastates-areas-of-southern-turkey-and-northern-syria/",
        imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2023/02/usgs1.jpg",
        newsSite: "Arstechnica",
        summary: "The early death toll is 1,600 people, but this number will grow.",
        publishedAt: "2023-02-06T14:19:40.000Z",
        updatedAt: "2023-02-06T17:41:30.013Z",
        featured: false,
        launches: [],
        events: [],
      })
    );
  }),

  rest.get("https://api.spaceflightnewsapi.net/v3/articles/181201", (req, res, ctx) => {
    return res(ctx.status(404).json("Not Found"));
  }),
  rest.get("https://api.spaceflightnewsapi.net/v3/articles/181202", (req, res, ctx) => {
    return res(ctx.status(404).json("Not Found"));
  }),
  rest.get("https://api.spaceflightnewsapi.net/v3/articles/181203", (req, res, ctx) => {
    return res(ctx.status(404).json("Not Found"));
  }),
];

// newsData.forEach((data) => {
//   handlers.push(
//     rest.get(`https://api.spaceflightnewsapi.net/v3/articles/${data.id}`, (req, res, ctx) => {
//       return res(ctx.json(data));
//     })
//   );
// });
