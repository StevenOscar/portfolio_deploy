'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4df0bc39f538da32661afcb6e64523af",
".git/config": "790d93c4fd284ed6a50ca6a0a5cde64c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "14069ae498dbf6d316f85eef17b83f72",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "601a230b10f03519f10fae49b82e8f10",
".git/logs/refs/heads/main": "20b2339698c7c79ba20bb8256bac1a17",
".git/logs/refs/remotes/origin/main": "42a68c37b55c755414d93d8cdf2c22c8",
".git/objects/19/54f4d766dd57591a128e77b07544830a79d2c7": "cf174f8dc3cdda5685234a3f448d5b12",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/24/d7ec452d11ea8aed4c3014ee9e89b8a8fe15af": "5b22b524f5bf107fe1e2aa180cd682ad",
".git/objects/2d/b801f7d3bced9c3ce33b3041df71544da0d9c2": "702decddfebfc262da69466404874f25",
".git/objects/33/18daffc2f1200d6aa1398d47d8adc3b3d605ba": "9431992289ad080dd99863e388daace9",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3f/81ae986dc207cae89d1cc16e685258c28d71d3": "c2d710a5141899ec2728c5d5bd24c5fe",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/16b73f1a70932d2cbe304d584fb627b27453e8": "b86605620cb414f5343dda8c195f5c3e",
".git/objects/4a/8c84584dfde6f40f4d5c4c8e5aec63137279d9": "d1b553461ba130609ab0386b7344db90",
".git/objects/4a/986913d611f06562c43803fff1e856eb583d66": "ffe99941511c1534bd9a0016a13a0ccf",
".git/objects/4e/dce29ad5cea1fa2419e4b301279da04e09b402": "d381d98efd2a8b5ee8dd6ed6596df799",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/56/beba272b0dcece37d6a4355d74f5406f5f4ede": "ed624051da3981c22990480e33631a89",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/f89a56ac05d28dc3679509fc5c5e2e742b649c": "592b0d698268d303dccd7f5de816b8a1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/d4bbe18885d98ac561c9dc141f26449b6abee7": "9cd540541acb277c5c02f481dcccc91b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/7e/6ffac16921012f23a1d8387be172341671528e": "d9c6b67807ecfe4f380c04c1189edcb3",
".git/objects/82/9ad0a158ba42907f10579888dcd16d11ada4c8": "6e8d99efee2e2f8fbdc1ecc580ef2806",
".git/objects/87/916ebf6c28a34ce408fc8bc6fe5b6750266e40": "290066bad898653c7eb1117a6e14e4df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/db7f9d35e0db25c6d24f5f0af06db473c6c363": "9457156fd99b2ec7771ae633d947e0a1",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a0/66e518fcf94777381fc8adb12d55cb8e439f9b": "bdddebf4cfe82b788a66fd90ea12b387",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/a55201cde54a074028b96ec790733de84a4fae": "2b3af760be18446f4d131f5c293df93e",
".git/objects/af/0e929958453643c87471d95c15bb4011ec3ec9": "e619f9233d3c71751011c5910d723d26",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c6f7ee1d36f0a526363d99d9a1b62e6ec497a6": "8b489d51f57db2c3b0747c73eff3be0f",
".git/objects/d0/887856b95c85fdc5a6ac88f9e6802ca20987d8": "af22a4b0d154b5f778dc40639781fa37",
".git/objects/d2/a362cad9fb9b6410d9701acb45f8759e556481": "b873c262159924124bb6a9ef256d6364",
".git/objects/d2/fe5a3a7abcc54aab82093e7f14fbb76dbaa880": "af345ff70470e60ccd2e5b6b17324748",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/cb9d0d89d45f4a5af5d96346471c3a4e34bfef": "99aca10167bead850c1d36679a0a0566",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/12e5c80e7c961d47880c84fd1278a358485be9": "dc3e1b9e781ee5dc163927c59a224cd3",
".git/objects/e0/fa10709a8daea45929bffade4b1b91784234cd": "39ae28bfa464216dd4dc59f64f7bf38e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/930599a0f20be81756317a63b7d979ff86487a": "3e25dc0e77cd8279e86ce31200759102",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/5a85a27aedcc110aaaba95fc9c6177ba822090": "f3d79b3de93d82ef391736d2b7804e38",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/d0ef0e7f2aba39eb2a8c5fe581698b789401fb": "2259d31101ea8259020eac44ef2d3509",
".git/refs/heads/main": "1c153ecf0b82512c521551d970d00778",
".git/refs/remotes/origin/main": "1c153ecf0b82512c521551d970d00778",
"assets/AssetManifest.bin": "c3c8f3392b78736ec18fbd4666dc8582",
"assets/AssetManifest.bin.json": "64369dabee956305d2decc40e92d9443",
"assets/AssetManifest.json": "87e21ac577ced4edae4edbf65cc6eed9",
"assets/assets/fonts/WorkSans-Black.ttf": "b2aba36e3bf90520d734ccf777833847",
"assets/assets/fonts/WorkSans-BlackItalic.ttf": "20c828ce9191741aaa1f411efb07cb2d",
"assets/assets/fonts/WorkSans-Bold.ttf": "1559ffc7cf61cbae7ea55a250722009c",
"assets/assets/fonts/WorkSans-BoldItalic.ttf": "2ef442b6bb99374940cb0d2b567d1283",
"assets/assets/fonts/WorkSans-ExtraBold.ttf": "bbd6edc88df326a3283424a0a1c711f0",
"assets/assets/fonts/WorkSans-ExtraBoldItalic.ttf": "1095c7f0d04afc7c48bb60f17bebb2cb",
"assets/assets/fonts/WorkSans-ExtraLight.ttf": "16ad283672151ea426e8c98d8ad0cfb5",
"assets/assets/fonts/WorkSans-ExtraLightItalic.ttf": "fb1581ad7f1470989c88be9c384d162d",
"assets/assets/fonts/WorkSans-Italic.ttf": "12427590f82046194707b200ca953582",
"assets/assets/fonts/WorkSans-Light.ttf": "02db4b738c689e05f3f12b3f22969815",
"assets/assets/fonts/WorkSans-LightItalic.ttf": "2108a8426b898093f45a2c624d0d876b",
"assets/assets/fonts/WorkSans-Medium.ttf": "73f5c36f3da9740c41b2c1aeb7fc94e5",
"assets/assets/fonts/WorkSans-MediumItalic.ttf": "85fe46010c3600601eb2e5f4a7f3019b",
"assets/assets/fonts/WorkSans-Regular.ttf": "a3d6c7f7606fc33a6ab5bed9688d1fe8",
"assets/assets/fonts/WorkSans-SemiBold.ttf": "c1b2dde1705db3ada7fd668c36523f66",
"assets/assets/fonts/WorkSans-SemiBoldItalic.ttf": "993687940ebf76815f5e44209e1a2fba",
"assets/assets/fonts/WorkSans-Thin.ttf": "6b3fb1a15d5c60fd9944e8c218525984",
"assets/assets/fonts/WorkSans-ThinItalic.ttf": "ba242e3d26d1d4532ac4a253b73f07e8",
"assets/assets/images/anidb.png": "b65eb67280b8192ac5b9c8a123f1116d",
"assets/assets/images/cropped2-removebg-preview.png": "ed95f929c3259e99d5943d99b63dbfba",
"assets/assets/images/cropped2.jpeg": "345ec21f6f3a786ac4ab34514d8204ab",
"assets/assets/images/destimate.png": "5e6cf55a62848686d3a0694b65941f39",
"assets/assets/images/icons8-css-48.png": "9d089bd0b10be9772b151c76fabe85ca",
"assets/assets/images/icons8-dart-48.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/images/icons8-figma-48.png": "497f287338586c39043b6a206cf24338",
"assets/assets/images/icons8-firebase-48.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/images/icons8-flutter-48.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/images/icons8-git-48.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/images/icons8-github-48.png": "8aa342703b6a9e06525fbb646cb524f8",
"assets/assets/images/icons8-html-48.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/assets/images/icons8-mysql-48.png": "9fe21f39d8b36701f29791a88d26cbe5",
"assets/assets/images/icons8-office-48.png": "34b20b9197b3fac852a0212c655830e0",
"assets/assets/images/imresizer-1726584949167.jpg": "7dde5b776dc2f016ef9e2c953da75a75",
"assets/assets/images/Logo-Colour-Transparant-1.png": "8a4e2ab970107a43329ae217803d2236",
"assets/assets/images/Logo-UEU-PBA-BARU-2-02.png": "c9a05c4a2973f5b4c32a511e83e947fa",
"assets/assets/images/scouthunt.png": "ec5dad48fb3ce3c2c4e5521ffe38e493",
"assets/assets/images/supabase-logo-icon.png": "8e6477a71c0ec4ab5ee01de766296af7",
"assets/assets/images/terradiscover.png": "2375f9e3fdf74709a08ee889cd453268",
"assets/FontManifest.json": "e5ef0927e1210d5e4d08ecc2d4ab4e5e",
"assets/fonts/MaterialIcons-Regular.otf": "c6f6c1cf01bf4c51b3d4fbbbbf33bcca",
"assets/NOTICES": "c8a14786c5bdba60c7572095fdb061ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "139b05720a78f460d735ad4fd6218425",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d4fd7d8c8c7a3457bc68e8834a77cc44",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "97085daa3dc1caacd26c2fa2f681974c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9c09e04a9cca7d11d97c231b706e5193",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98e45dad204472872c47c05dde435fd3",
"/": "98e45dad204472872c47c05dde435fd3",
"main.dart.js": "e601570ca39081b4ccc66e7ac2b2d745",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
