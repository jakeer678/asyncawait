

   const promise_1 =  new Promise((resolve, reject) => { 
        setTimeout(()=>{
         resolve('getColdDrinks')
        },2000)
    })

    const promise_2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('husband gets butter');
        },1000)
    });

      async function getButter() {
          const coldData = await promise_2;
          console.log(coldData)
          const drinkData = await promise_1;
      console.log(drinkData)
      }
        getButter();

    const posts = []
      function create2ndPost() {
        return new Promise((resolve,reject) => {
             setTimeout(()=>{
                posts.push('post2')
             },3000)
        })
      }  

      function create3ndPost() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push('post3')
            },2000)
        })
      }

      function deletePost() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(posts.length>0) {
                    const popedElem = posts.pop();
                    resolve(popedElem)
                } else {
                    reject("Error")
                }
            })
        })
      }


      async function createPosts() {
        const post_1 = await create3ndPost();
        console.log(post_1)
        const post_2 = await create2ndPost();
        console.log(post_2)
        const deletePos = await deletePost();
          console.log(deletePos)
      }
  
      createPosts();