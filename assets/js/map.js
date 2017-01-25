// Map draw script ITKnowledge Maroc

var map;

var targetSVG = "m 365.027,44.5 c -30,-29.667 -66.333,-44.5 -109,-44.5 -42.667,0 -79,14.833 -109,44.5 -30,29.667 -45,65.5 -45,107.5 0,25.333 12.833,67.667 38.5,127 25.667,59.334 51.333,113.334 77,162 25.667,48.666 38.5,72.334 38.5,71 4,-7.334 9.5,-17.334 16.5,-30 7,-12.666 19.333,-36.5 37,-71.5 17.667,-35 33.167,-67.166 46.5,-96.5 13.334,-29.332 25.667,-59.667 37,-91 11.333,-31.333 17,-55 17,-71 0,-42 -15,-77.833 -45,-107.5 z";

AmCharts.ready(function() {
map = new AmCharts.AmMap();

map.dragMap = false;

map.balloon.color = "#000000";
map.balloon.fixedPosition = true;

 var dataProvider = {
 mapVar: AmCharts.maps.moroccoHigh,
 images: [

// Peugeot :
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE CASASABLANCA FAR <br/> 193, avenue des FAR <br/> Tél. 05 22 46 48 00 ", latitude:33.5966585, longitude:-7.614425900000015},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE CALIFORNIE <br/> Marjane Californie <br/> Tél. 05 22 21 88 51 ", latitude:33.5448539, longitude:-7.6404014},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE ZENATA <br/> Route 111 CASA Mohamedia <br/> Tél. 05 22 66 07 63 ", latitude:33.637737, longitude:-7.502975},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE CASA AIN SEBAA <br/> Route La Continentale, Km 9.200, Ain Sebaa <br/> Tél. 05 29 02 69 97 ", latitude:33.602778, longitude:-7.541944000000058},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE LONGCHAMPS <br/> 61, Rte d'Azemmour <br/> Tél. 05 22 36 81 04/12 ", latitude:33.577753739892756, longitude:-7.672861218452454},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE MOHAMMEDIA <br/> Bd Hassan II Centre commercial Aswak Salam <br/> Tél. 05 29 03 30 64 ", latitude:33.68855663143876, longitude:-7.400708198547363},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE MARRAKECH <br/> Extension Allal Fassi Quartier Assada <br/> Tél. 05 24 30 90 20 ", latitude:31.6313210, longitude:-8.0124780},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE KENITRA <br/> Sortie Autoroute Rabat. Parc Marjane <br/> Tél. 05 37 36 86 26 ", latitude:34.2640610, longitude:-6.5782960},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE TANGER <br/> Av des FAR, Route de Rabat <br/> Tél. 05 39 99 97 21 ", latitude:35.74406023724812, longitude:-5.844575188360636},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE TETOUAN <br/> Route de Mdiq - Marjane <br/> Tél. 05 39 99 97 21 ", latitude:35.56492432603757, longitude:-5.354864863684838},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE FES <br/> Rue Ibn Abbar Quartier Industriel Fès <br/> Tél. 05 35 62 16 46 ", latitude:34.041201654401576, longitude:-5.034887153967247},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SUCCURSALE MEKNES <br/> Avenue  des FAR <br/> Tél. 05 35 52 43 60 ", latitude:33.89567088489856, longitude:-5.547752380371094},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SGA RABAT <br/> 25, Avenue Hassan II, Route de Casablanca <br/> Tél. 05 37 23 74 60 ", latitude:33.98565701715568, longitude:-6.869576703982602},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "SGA SALE <br/> Lot 1 & 2, Parc industriel Sbihi, Km1 route de Kénitra <br/> Tél. 05 38 00 43 15 ", latitude:34.05357499274671, longitude:-6.810080409049988},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION MAGHREB SAFI <br/> 17 route sidi ouassel <br/> Tél. 05 24 46 33 90 ", latitude:32.2838311, longitude:-9.244008099999974},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION SED SOUSS <br/> Avenue Al Mouqawama <br/> Tél. 05 28 22 07 90 ", latitude:30.416310696801066, longitude:-9.579121685028099},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION SOMAATA <br/> 1, Av. Mohammed V <br/> Tél. 05 23 48 21 40 ", latitude:32.33570760000001, longitude:-6.3563877000000275},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION Nouvelle garage Beni Sanssen <br/> 20, Bd El Fetouaki <br/> Tél. 05 36 68 21 15 ", latitude:34.6880531, longitude:-1.9170358999999735},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION NADOR AUTOS <br/> Rte principale de Taouima N° de 35 à 40 <br/> Tél. 05 36 60 34 02 ", latitude:35.1550526642831, longitude:-2.9286625613769957},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION HAMMOUTEN AUTO <br/> 45, BD BIRANZARANE <br/> Tél. 05 35 67 02 50 ", latitude:34.2309814, longitude:-4.010458599999993},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION GARAGE LAFAYETTE <br/> 65, Av Mohamed V <br/> Tél. 06 66 73 44 40 ", latitude:35.2422018, longitude:-3.9300772999999936},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION NABAM AUTO <br/> 139, BD IMAM MALIK <br/> Tél. 05 24 41 17 07 ", latitude:32.053715366693574, longitude:-7.408234477043152},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION SANDI STAR AUTO <br/> 181, BD Mohamed V <br/> Tél. 05 37 55 74 10 ", latitude:33.8306912, longitude:-6.097981300000015},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION AUTO REDALI <br/> Rue n° 13 - Av Hassan II, Route de Méknès <br/> Tél. 05 35 57 47 30 ", latitude:31.5121627, longitude:-5.024641400000064},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "CONCESSION EXTRA TECH SUD AUTOS <br/> Route N°1 vers Boujdour <br/> Tél. 05 28 99 27 84 ", latitude:27.153514360614004, longitude:-13.203141689300537},
            {svgPath: targetSVG, zoomLevel: 20, color: "#172748", scale: 0.04, title: "AGENT LAHSSAINI AUTO <br/> Av. BIRANZARANE N°1 BLOC D <br/> Tél. 05 24 88 23 20 ", latitude:30.923863309137975, longitude:-6.8948811292648315},
// Citroen :
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE CASABLANCA FAR <br/> 193 av des FAR <br/> Tél. 05 22 46 49 00 ", latitude:33.5966586, longitude:-7.614425900000015},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE CALIFORNIE <br/> Marjane Californie <br/> Tél. 05 22 21 84 72 ", latitude:33.5448540, longitude:-7.6404014},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE ZENATA <br/> Rte secondaire 111 ZI Ain sebaa <br/> Tél. 05 29 02 55 94 ", latitude:33.637738, longitude:-7.502975},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE CASA AIN SEBAA <br/> Km 9,2 Rte de Rabat <br/> Tél. 05 22 66 60 31 ", latitude:33.602779, longitude:-7.541944000000058},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE SIDI MAAROUF <br/> ROUTE DE BOUSKOURA SIDI MAAROUF <br/> Tél. 05 29 02 54 00 ", latitude:33.52155753316552, longitude:-7.653590902654969},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE MOHAMMEDIA <br/> Asswak Assalam <br/> Tél. 05 23 32 74 84 ", latitude:33.68855663143877, longitude:-7.400708198547363},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE MARRAKECH <br/> Extension Allal Fassi Quartier Assada <br/> Tél. 05 24 30 81 35 ", latitude:31.6313211, longitude:-8.0124780},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE KENITRA <br/> Marjane Kenitra Rte de rabat <br/> Tél. 05 37 36 86 26 ", latitude:34.2640611, longitude:-6.5782960},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE TANGER <br/> av des FAR Rte de Rabat <br/> Tél. 05 39 31 10 83 ", latitude:35.74406023724813, longitude:-5.844575188360636},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE TETOUAN <br/> 71 av casablanca <br/> Tél. 05 39 71 71 85 ", latitude:35.56492432603758, longitude:-5.354864863684838},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE FES <br/> Rue Ibn Abbar QI Douakarat <br/> Tél. 05 35 62 16 40 ", latitude:34.041201654401580, longitude:-5.034887153967247},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE MEKNES <br/> Anle Rue Kifa et av des FAR <br/> Tél. 05 35 40 02 98 ", latitude:33.89567088489857, longitude:-5.547752380371094},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE SGA RABAT <br/> 24 zi vita avenue hassan 2 rte de <br/> Tél. 05 37 28 96 00 ", latitude:33.98565701715570, longitude:-6.869576703982602},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "SUCCURSALE SGA SALE <br/> Parc industriel sbihi, km1, rte de kenitra <br/> Tél. 05 38 00 43 13 ", latitude:34.05357499274672, longitude:-6.810080409049988},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION MAGHREB SAFI <br/> 2 bd echahid abdallah <br/> Tél. 05 24 46 25 26 ", latitude:32.310060, longitude:-9.236617000000024},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION SED SOUSS <br/> Angle Bd el moukawama et 2 mars <br/> Tél. 05 28 22 06 19 ", latitude:30.416310696801067, longitude:-9.579121685028099},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION ARIJ AUTO <br/> Route de Marrakech <br/> Tél. 05 23 35 35 40 ", latitude:33.21767121905539, longitude:-8.492394089698792},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION KADI AUTO <br/> BD Mohamed V, Route de Marrakech <br/> Tél. 05 23 42 26 47 ", latitude:32.31930315234463, longitude:-6.388001060485863},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION CASA ESPAGNA <br/> Bd dhafir <br/> Tél. 05 36 68 21 15 ", latitude:34.68868507314464, longitude:-1.9163686037063599},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION NADOR AUTO <br/> Rte principale n° 25 <br/> Tél. 05 36 33 46 54 ", latitude:35.1550526642832, longitude:-2.9286625613769957},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION CONTINENTAL MOTORS <br/> 17 bd Mohamed V <br/> Tél. 05 35 28 57 79 ", latitude:34.2237190, longitude:-4.007484999999974},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION RAISS AUTO <br/> 65 av Mohamed V <br/> Tél. 05 39 98 00 92 ", latitude:35.2419780, longitude:-3.930153300000029},
            {svgPath: targetSVG, zoomLevel: 20, color: "#d03533", scale: 0.04, title: "CONCESSION NABAM AUTO <br/> 139 BD IMAM MALIK <br/> Tél. 05 24 41 17 07 ", latitude:32.05742351247835, longitude:-7.406576871871948}
                    ],
            getAreasFromMap:true
            };

map.dataProvider = dataProvider;

map.areasSettings = {
    autoZoom: false,
    selectedColor: "#c7c7c7",
    color: "#83b3d6",
    rollOverOutlineColor: "#FFFFFF",
    rollOverColor: "#898585"
};


var zoomControl = map.zoomControl;
zoomControl.panControlEnabled = false;
zoomControl.zoomControlEnabled = false;

map.write("mapdiv");

});
