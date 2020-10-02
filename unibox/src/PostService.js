import axios from 'axios';

const url = 'http://localhost:4000/api/MajorsInfo';

class PostService {
      // Get Posts
      static getPosts(Major_Name) {
            return new Promise((resolve, reject) => {
              axios
                .get(url)
                .then((res) => {
                  const data = res.data.filter(item => item.Major_Name.includes(Major_Name));
                  // const data = res.data;
                  resolve(
                    data.map((major) => ({
                      ...major,
                      Major_Name: major.Major_Name,
                      universities: major.Universities,
                      uniName: major.Universities.Name,
                      uniAbout: major.Universities.About,
                    }))
                  );
                })
                .catch((err) => {
                  reject(err);
                });
            });
      }
      static getAllPosts() {
        return new Promise((resolve, reject) => {
          axios
            .get(url)
            .then((res) => {
              const data = res.data;
              resolve(
                data.map((major) => ({
                  ...major,
                  Major_Name: major.Major_Name,
                  universities: major.Universities,
                  uniName: major.Universities.Name,
                  uniAbout: major.Universities.About,
                }))
              );
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
        
}
export default PostService;
