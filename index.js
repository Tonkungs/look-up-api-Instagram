const axios = require('axios');

const URL_IG = `https://i.instagram.com`
const USER_IG = 1641230937
const QUERY_HASH_TIMELINE = `e769aa130647d2354c40ea6a439bfc08`
const QUERY_HASH_STORY = `5da4b106f3e821421ea90356bb98d226`
const toQueryString = object =>
  '?' +
  Object.keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&');

let LOAD_TIMELINE = {
  "query_hash": QUERY_HASH_TIMELINE,
  "variables": JSON.stringify({ "id": USER_IG, "first": 12, "after": "" }),
  "keys": JSON.stringify(["edge_owner_to_timeline_media", ["data", "user"]]),
}

let LOAD_STORY = {
  "query_hash": QUERY_HASH_STORY,
  "variables": JSON.stringify({
    "reel_ids": [USER_IG],
    "tag_names": [],
    "location_ids": [],
    "highlight_reel_ids": [],
    "precomposed_overlay": false,
    "show_story_viewer_list": true,
    "story_viewer_fetch_count": 50,
    "story_viewer_cursor": "",
    "stories_video_dash_manifest": false
  }),
}
let URL = `${URL_IG}/graphql/query/${toQueryString(LOAD_STORY)}`

// https://i.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":1641230937,"first":12,"after":""}
console.log('searchParams', URL);
// console.log('URL',URL);

const config = {
  method: 'get',
  url: URL,
  headers: {
    // แค่นี้ก็ดึงได้แล้ว
    "user-agent": "Instagram 27.0.0.7.97 (iPhone7,2; iPhone OS 9_3_3; en_US; en-US; scale=2.00; 750x1334) AppleWebKit/420+",
    // user-agent 
    "cookie": "mid=XX0hvQAAAAHwAlmx0RJ0Hk4LxODW; fbm_124024574287414=base_domain=.instagram.com; fbsr_124024574287414=1VKcVU-OQyVUyyq_SaBaOuJOIqQvl8eSzDTx8q6ji9A.eyJ1c2VyX2lkIjoiMTMwODgzNTc3MSIsImNvZGUiOiJBUUE5eFNFMUJEWXNJekxWcmJHQ3BtWWkyd3NMMWlvQ3gwT096T2pBRW9LcFNleC01eV9McV93NVF3YlFob1NETFFHSE1tUUpGaHM2M1FvT1luSnVVamFZZGVCcWhnQzBhU1g5emF4SnlfclVYR3dNNFhPR2JMU0t1TW1STDJzbENiV09EcnNKcUE3aVM1enVWRWF4SnA1MVQ4MkxOX1VSNzhSSEdRdVYxek9pYzFjX3k5c2VXeGU1aEs5VHJxOFdpeHh4N3BCQ1B0Vkh6YVNPWFlSdU1CUmJKSzROcHpfTWF2d3NLYTJTY0FzS0VVVVctLXMzTGZMV1pFcXV0NnpIV2VjRE1WSXp5bG1RRVhQTWJ4TjI1VjdGbmdJbW96bWRTVVVFNUF2dzQ4bWpFSEFjdmZMOHNBX1F2bDRnOHMxN2hMWSIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFBb2ExOThkRERHZlZhR2VzcDI4Q1RGZEhHQzM0dzJLZUlhZ012V0NKNGhhNTI3cHhua1BCVEkwT0RidG1WTVN4NVhISUw3VkkyRHFBRFpCRVJnUlpDZXRuS1VaQ3VRRVhDeHE2V2I2a3lxWkNINkw0bEc4bkY2YXlxN0NnNUttWW92YjVaQmNPdzE5VktLOHF0SWhkcURLTlZIRTlaQ2RUSFpBMldxN2pjUmxVYVJJNFl0Q0xjWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTU2ODQ4MTg3N30; csrftoken=t696sfBP5DLxq1Ol62lgHRoFeNWk47kZ; shbid=12332; ds_user_id=206654970; sessionid=206654970%3A6TPR5PDyyI6gJU%3A10; csrftoken=t696sfBP5DLxq1Ol62lgHRoFeNWk47kZ; shbid=12332; ds_user_id=206654970; sessionid=206654970%3A6TPR5PDyyI6gJU%3A10; rur=VLL; rur=VLL; ig_did=58CD08E2-3CC0-4982-B892-BA22F6C07705; shbts=1576152199.193321; urlgen=\"{\\\"2403:6200:88a2:7464:a0a1:628d:5ade:cf0\\\": 45758}:1ifjeq:iQE73Al_m8h9xU9QCEJfPQNLoA0\"; shbts=1576238995.6149318; mid=XfN_kwAAAAGqAAtReg2Q7-s-X D4N; urlgen=\"{\\\"2403:6200:88a2:7464:a0a1:628d:5ade:cf0\\\": 45758}:1ifjlb:xEb6D7_1KvLdVBHejm9aRjSLJuQ\"",
  }
}
// ============================================
// axios(config)
//     .then(function (response) {
//         // handle success
//         console.log(response.data.user.hd_profile_pic_url_info.url);
//     })


// // getTimeLine
// axios(config)
//   .then(function (response) {
//     // handle success
//     // count จำนวน
//     // page_info บอกว่ามีหน้าต่อไปไหม
//     // has_next_page  มีไหม
//     // end_cursor key ขอหน้าต่อไป
//     let newPhotos = []
//     response.data.data.user.edge_owner_to_timeline_media.edges.map(item => {
//       newPhotos.push(item.node.display_url)
//       // console.log('item =>', );
//     })
//     console.log('newPhotos', newPhotos.length);
//   })

// getStory
axios(config)
  .then(function (response) {
    // handle success
    console.log('newPhotos', response.data);
  })


