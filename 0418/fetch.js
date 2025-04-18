// 연습문제 p.300, p.301

// 특정 유저의 정보와 게시글 목록을 처리하는 함수 작성
// fetch 사용 : p.280 참조

// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1

getUserPosts(1);
// => 다음 형식으로 리턴 (format 준수)
// {
//     id: 유저ID,
//     name: 유저명,
//     posts: [
//         {id: 글ID, title: 글제목, body: 글내용}, {...}
//     ]
// }


//곽희건
async function getUserPost(userId) {
    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const postsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const user = await userRes.json();
    const posts = await postsRes.json();
    console.log({
      id: user.id,
      name: user.name,
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body,
      })),
    });
    return {
      id: user.id,
      name: user.name,
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body,
      })),
    };
  }
  getUserPost(1);
