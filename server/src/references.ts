 import Qty from "js-quantities";

// // TODO dit moet eigenlijk uit een database komen
// export const referenceData: Reference[] = [
//     //UNITLESS AMOUNTS
//     {
//         description: "the amount of cells in a human body",
//         measurement: new Qty("30e12"),
//         source: "https://www.healthline.com/health/number-of-cells-in-body",
//     },
//     {
//         description: "the amount of planets that orbit the Sun",
//         measurement: new Qty("8"),
//         source: "https://en.wikipedia.org/wiki/Solar_System",
//     },
//     {
//         description: "the amount of countries on Earth",
//         measurement: new Qty("195"),
//         source: "https://www.zmescience.com/science/how-many-countries-are-there-in-the-world-043242/",
//     },
//     {
//         description: "the amount of Portal games",
//         measurement: new Qty("3"),
//         source: "https://en.wikipedia.org/wiki/Portal_(series)",
//     },
//     {
//         description: "the amount of stars in the observable universe",
//         measurement: new Qty("1e21"),
//         source: "http://scienceline.ucsb.edu/getkey.php?key=3775",
//     },
//     {
//         description: "the amount of languages spoken today",
//         measurement: new Qty("7117"),
//         source: "https://www.ethnologue.com/guides/how-many-languages",
//     },
//     {
//         description: "the world population",
//         measurement: new Qty("7.83e9"),
//         source: "https://www.worldometers.info/world-population/",
//     },
//     {
//         description: "the amount of atoms in a grain of salt",
//         measurement: new Qty("1.2e18"),
//         source: "http://www4.hcmut.edu.vn/~huynhqlinh/olympicvl/tailieu/physlink_askexpert/ae342.cfm.htm",
//     },
//     {
//         description: "the amount of people killed in WW2",
//         measurement: new Qty("75e6"),
//         source: "https://courses.lumenlearning.com/suny-hccc-worldhistory2/chapter/casualties-of-world-war-ii/",
//     },
//     {
//         description: "the amount of Armanians killed in the Armenian Genocide",
//         measurement: new Qty("1e6"),
//         source: "https://en.wikipedia.org/wiki/Armenian_Genocide",
//     },
//     //DISTANCE
//     {
//         description: "the diameter of the Milky Way",
//         measurement: new Qty("105700 ly"),
//         source: "https://en.wikipedia.org/wiki/Milky_Way",
//     },
//     {
//         description: "the radius of the Sun",
//         measurement: new Qty("695700 km"),
//         source: "https://en.wikipedia.org/wiki/Sun",
//     },
//     {
//         description: "the average distance from Earth to the Sun",
//         measurement: new Qty("1 AU"),
//         source: "https://en.wikipedia.org/wiki/Astronomical_unit",
//     },
//     {
//         description: "the radius of the Earth",
//         measurement: new Qty("6371 km"),
//         source: "https://en.wikipedia.org/wiki/Earth",
//     },
//     {
//         description: "the circumference of the Earth",
//         measurement: new Qty("40075 km"),
//         source: "https://en.wikipedia.org/wiki/Earth%27s_circumference",
//     },
//     {
//         description: "the height of the Mount Everest",
//         measurement: new Qty("8849 m"),
//         source: "https://en.wikipedia.org/wiki/Mount_Everest",
//     },
//     {
//         description: "the height of the Eiffel Tower",
//         measurement: new Qty("324 m"),
//         source: "https://en.wikipedia.org/wiki/Eiffel_Tower",
//     },
//     {
//         description: "the height of the iPhone X",
//         measurement: new Qty("143.6 mm"),
//         source: "https://support.apple.com/kb/sp770",
//     },
//     {
//         description: "the length of a dust mite",
//         measurement: new Qty("250 um"),
//         source: "https://en.wikipedia.org/wiki/House_dust_mite",
//     },
//     {
//         description: "the size of a salt grain",
//         measurement: new Qty("0.3 mm"),
//         source: "https://www2.palomar.edu/users/warmstrong/pinhead.htm#:~:text=The%20average%20salt%20grain%20is,0.03%20cm%20on%20a%20side.",
//     },
//     {
//         description: "the width of a human hair",
//         measurement: new Qty("75 um"),
//         source: "https://en.wikipedia.org/wiki/Hair%27s_breadth",
//     },
//     {
//         description: "the width of a credit card",
//         measurement: new Qty("85.6 mm"),
//         source: "https://en.wikipedia.org/wiki/ISO/IEC_7810",
//     },
//     {
//         description: "the height of a credit card",
//         measurement: new Qty("53.98 mm"),
//         source: "https://en.wikipedia.org/wiki/ISO/IEC_7810",
//     },
//     {
//         description: "the height of the Burj Khalifa",
//         measurement: new Qty("828 m"),
//         source: "https://en.wikipedia.org/wiki/Burj_Khalifa",
//     },
//     {
//         description: "the height of the Statue of Liberty",
//         measurement: new Qty("93 m"),
//         source: "https://en.wikipedia.org/wiki/Statue_of_Liberty",
//     },
//     {
//         description: "the length of the river Nile",
//         measurement: new Qty("6650 km"),
//         source: "https://en.wikipedia.org/wiki/Nile",
//     },
//     {
//         description: "the distance light travels in a year",
//         measurement: new Qty("1 ly"),
//         source: "https://en.wikipedia.org/wiki/Light-year",
//     },
//     {
//         description: "the distance light travels in a second",
//         measurement: new Qty("1 ls"),
//         source: "https://en.wikipedia.org/wiki/Light-second",
//     },
//     {
//         description: "the length of the Great Wall of China",
//         measurement: new Qty("21196 km"),
//         source: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
//     },
//     {
//         description: "the radius of a hydrogen atom (Van der Waals)",
//         measurement: new Qty("120 pm"),
//         source: "https://en.wikipedia.org/wiki/Hydrogen",
//     },
//     {
//         description: "the average adult human height",
//         measurement: new Qty("171 cm"),
//         source: "https://en.wikipedia.org/wiki/Average_human_height_by_country",
//     },
//     //ENERGY
//     {
//         description: "the energy released by a supernova",
//         measurement: new Qty("1e44 J"),
//         source: "http://hyperphysics.phy-astr.gsu.edu/hbase/Astro/snovcn.html",
//     },
//     {
//         description: "the energy carried by a lightning bolt",
//         measurement: new Qty("5 GJ"),
//         source: "https://en.wikipedia.org/wiki/Harvesting_lightning_energy#:~:text=A%20single%20bolt%20of%20lightning,in%2038%20gallons%20of%20gasoline).",
//     },
//     {
//         description: "the energy of an earthquake that is 1.0 on the Richter scale",
//         measurement: new Qty("2.016 MJ"),
//         source: "https://www.volcanodiscovery.com/earthquakes/energy.html",
//     },
//     {
//         description: "the energy of an earthquake that is 4.0 on the Richter scale",
//         measurement: new Qty("63 GJ"),
//         source: "https://www.volcanodiscovery.com/earthquakes/energy.html",
//     },
//     {
//         description: "the energy of an earthquake that is 9.0 on the Richter scale",
//         measurement: new Qty("2 EJ"),
//         source: "https://www.volcanodiscovery.com/earthquakes/energy.html",
//     },
//     {
//         description: "the energy generated by consuming an apple",
//         measurement: new Qty("397.5 J"),
//         source: "https://fdc.nal.usda.gov/",
//     },
//     {
//         description: "the energy generated by consuming a banana",
//         measurement: new Qty("439.3 J"),
//         source: "https://fdc.nal.usda.gov/",
//     },
//     {
//         description: "the energy generated by consuming a slice of bread",
//         measurement: new Qty("343.1 J"),
//         source: "https://fdc.nal.usda.gov/",
//     },
//     {
//         description: "the energy released by the Sun every second",
//         measurement: new Qty("384.6 YJ"),
//         source: "https://ag.tennessee.edu/solar/Pages/What%20Is%20Solar%20Energy/Sun's%20Energy.aspx",
//     },
//     {
//         description: "the energy consumed by the human population in 2017",
//         measurement: new Qty("113009 TWh"),
//         source: "https://en.wikipedia.org/wiki/World_energy_consumption",
//     },
//     {
//         description: "the kinetic energy of a car going 120 km/h",
//         measurement: new Qty("1.008 MJ"),
//         source: "https://www.autolist.com/guides/average-weight-of-car",
//     },
//     {
//         description: "the energy released by 1 kg of TNT",
//         measurement: new Qty("4.184 MJ"),
//         source: "https://en.wikipedia.org/wiki/TNT_equivalent",
//     },
//     {
//         description: "the energy released by a hurricane every second",
//         measurement: new Qty("0.6 PJ"),
//         source: "http://www.atmo.arizona.edu/students/courselinks/spring07/atmo336s3/lectures/sec2/hurricanes4.html",
//     },
//     {
//         description: "the energy released by 1 gram of TNT",
//         measurement: new Qty("4184 J"),
//         source: "https://en.wikipedia.org/wiki/TNT_equivalent",
//     },
//     {
//         description: "the energy released by Little Boy",
//         measurement: new Qty("63 TJ"),
//         source: "https://en.wikipedia.org/wiki/Little_Boy",
//     },
//     {
//         description: "the energy released by Tsar Bomba",
//         measurement: new Qty("210 PJ"),
//         source: "https://en.wikipedia.org/wiki/Tsar_Bomba",
//     },
//     //MASS
//     {
//         description: "the atomic mass of a hydrogen atom",
//         measurement: new Qty("1.00784 u"),
//         source: "https://en.wikipedia.org/wiki/Hydrogen",
//     },
//     {
//         description: "the atomic mass of a carbon atom",
//         measurement: new Qty("12.0107 u"),
//         source: "https://en.wikipedia.org/wiki/Carbon",
//     },
//     {
//         description: "the atomic mass of a lead atom",
//         measurement: new Qty("207.2 u"),
//         source: "https://en.wikipedia.org/wiki/Lead",
//     },
//     {
//         description: "the weight of an amoeba",
//         measurement: new Qty("180 ug"),
//         source: "https://mjec.blog/2017/07/23/how-many-atoms-are-there-in-an-amoeba/",
//     },
//     {
//         description: "the weight of the Titanic",
//         measurement: new Qty("40.823 Gg"),
//         source: "https://en.wikipedia.org/wiki/Titanic",
//     },
//     {
//         description: "the average weight of an adult human",
//         measurement: new Qty("62 kg"),
//         source: "https://en.wikipedia.org/wiki/Human_body_weight",
//     },
//     {
//         description: "the weight of an adult male polar bear",
//         measurement: new Qty("500 kg"),
//         source: "http://see-the-sea.org/facts/facts-body.htm",
//     },
//     {
//         description: "the weight of car",
//         measurement: new Qty("1814 kg"),
//         source: "https://www.autolist.com/guides/average-weight-of-car",
//     },
//     {
//         description: "the weight of a bus",
//         measurement: new Qty("32500 lb"),
//         source: "https://getawaytips.azcentral.com/what-is-the-weight-of-a-city-bus-12373480.html",
//     },
//     {
//         description: "the weight of a train carriage",
//         measurement: new Qty("144000 kg"),
//         source: "http://www.kleinetrein.nl/spoors_1704/nsm_html/dutch/nsm_eltr.html",
//     },
//     {
//         description: "the weight of a €1 coin",
//         measurement: new Qty("7.5 g"),
//         source: "https://ec.europa.eu/info/business-economy-euro/euro-area/euro-coins-and-notes/euro-coins/common-sides-euro-coins_en",
//     },
//     {
//         description: "the weight of a fully grown human brain",
//         measurement: new Qty("1336 g"),
//         source: "https://en.wikipedia.org/wiki/Brain_size#cite_note-CarpenterCh1-1",
//     },
//     {
//         description: "the weight of a US dollar bill",
//         measurement: new Qty("1 g"),
//         source: "https://en.wikipedia.org/wiki/United_States_one-dollar_bill",
//     },
//     {
//         description: "what an untrained adult human male can deadlift",
//         measurement: new Qty("62.5 kg"),
//         source: "https://exrx.net/Testing/WeightLifting/DeadliftStandardsKg",
//     },
//     {
//         description: "what an untrained adult human female can deadlift",
//         measurement: new Qty("37.5 kg"),
//         source: "https://exrx.net/Testing/WeightLifting/DeadliftStandardsKg",
//     },
//     {
//         description: "the heaviest thing deadlifted",
//         measurement: new Qty("501 kg"),
//         source: "https://www.guinnessworldrecords.com/world-records/heaviest-deadlift",
//     },
//     {
//         description: "the weight of the oceans on Earth",
//         measurement: new Qty("1.315417873 Yg"),
//         source: "http://see-the-sea.org/facts/facts-body.htm",
//     },
// ];

 export interface Reference {
     description: string;
     measurement: Qty;
     source: string;
 }