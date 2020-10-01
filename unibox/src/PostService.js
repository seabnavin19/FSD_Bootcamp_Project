// import axios from 'axios';

const url = 'http://localhost:4000/api/MajorsInfo';

class PostService {
      // Get Posts
      // static getPosts() {
      //       return new Promise((resolve, reject) => {
      //         axios
      //           .get(url)
      //           .then((res) => {
      //             const data = res.data;
      //             resolve(
      //               data.map((major) => ({
      //                 ...major,
      //                 Major_Name: major.Major_Name,
      //               }))
      //             );
      //           })
      //           .catch((err) => {
      //             reject(err);
      //           });
      //       });
      //     }
      static async getPosts() {
      const response = await fetch(url);
      const data = await response.json();

            return data.map(mytask => ({
                  ...mytask,
                  createAt: new Date(mytask.createAt)
            }));
      }
}
export default PostService;
