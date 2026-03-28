import React from "react";
import "../styles/Blog.css";

function Blog() {

  return (

    <div className="blogPage">

      <h1 className="blogTitle">UniEats Blog</h1>

      <div className="blogContainer">

        {/* Blog Post 1 */}

        <div className="blogCard">

          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="Healthy Food"
          />

          <div className="blogContent">

            <h2>Why Healthy Food Helps Students Study Better</h2>

            <p className="blog-info">
              By UniEats • Updated March 2026
            </p>

            <p> University students tend to have tight schedules which are full of lectures. 
               assignments, and exams, and there is no time to think about nutrition properly.
               Having a balanced diet is important because healthy food is also important.
              in enhancing focus and maintaining energy levels during the day.
            </p><br/>
            <p> Students are better when the right nutrients are introduced in their bodies.
               ready to meet academic challenges, be attentive in classes and be. prolific
               at study periods. Food is not the only solution to healthy eating. 
               it is concerning establishing the premises of academic achievement.
            </p>

            <br/>
            <p> Healthy diets contain all-important vitamins and minerals that boost the brain.
              function, memory and general cognitive performance. This allows students to perform 
              better and with improved concentration during exams and coursework.
            </p>

            <br/>

            <p> Moreover, regular intake of healthy food will lower fatigue and stress,
               which are typical issues college students have to deal with. By eating well,
               students are in a position to enhance their physical. health and sanity.
            </p>

               <br/>
            <p> Through the availability of food 24/7, students will be able to have access
               to meals whenever they want. without disturbing their time of study. 
               This is a convenience that would ensure they. be lively, attentive and prepared
              to attain their academic objectives at any. time of the day or night. 
              </p>

          </div>

        </div>


        {/* Blog Post 2 */}

        <div className="blogCard">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food Delivery"
          />

          <div className="blogContent">

            <h2>How UniEats Makes Food Delivery Easier for Students</h2>

            <p className="blog-info">
              By UniEats • Updated March 2026
            </p>

            <p>
              University students often struggle to find affordable meals that are quick,
              convenient, and close to campus. Long lecture hours, assignments, and
              exam preparation leave very little time for cooking or searching for food.
              UniEats was created to solve this problem by providing students with a
              simple online platform where they can browse and order meals in minutes.
            </p>
                <br/>
            <p>
              The UniEats platform allows students to explore a wide variety of meals,
              including fast food, traditional South African dishes, snacks, drinks,
              and healthy options. Each product includes clear information such as
              price, description, and images so that students can easily choose the
              meals they prefer.
            </p>
                 <br/>
            <p>
              Another advantage of UniEats is the easy-to-use ordering system.
              Students can add items to their cart, review their order, and
              proceed to checkout without any complicated steps. This ensures
              that meals can be ordered quickly between classes or during
              late-night study sessions.
            </p>
                 <br/>
            <p>
              UniEats also focuses on affordability and accessibility for
              university communities. By offering a range of meal options
              at different price points, the platform ensures that students
              can always find something that fits their budget while still
              enjoying quality food.
            </p>
                   
            

          </div>

        </div>

      </div>

    </div>
  );
}

export default Blog;