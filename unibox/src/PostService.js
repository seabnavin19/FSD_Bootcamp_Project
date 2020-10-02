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
                    }))
                  );
                })
                .catch((err) => {
                  reject(err);
                });
            });
      }

      static getUniversity(Major_Name,universities,index) {
        return new Promise((resolve, reject) => {
          axios
            .get(url)
            .then((res) => {
              const data = res.data.filter(item => item.Major_Name.includes(Major_Name,universities,index));
              // const data = res.data;
              resolve(
                data.map((major) => ({
                  ...major,
                  Major_Name: major.Major_Name,
                  universities: major.Universities,
                  uniAbout: major.Universities[index].About,
                  uniProgramView: major.Universities[index].Program_Overview,
                  uniCareerPath: major.Universities[index].Career_Path.toString(),
                  contact: major.Universities[index].Contact.toString().split(',').join("\n"),


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
