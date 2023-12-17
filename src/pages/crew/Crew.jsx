import "./crew.scss";
import React, { useState } from "react";
import { BackgroundHoc } from "../../components";

const Crew = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/bg_crew_desktop.jpg"
  );
  return (
    <>
      <BackgroundHoc backGroundImage={backgroundImage}>
        <section className="home">
          <h1>Crew</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            laborum, delectus dolor nesciunt alias quas expedita repellendus,
            nemo quia nostrum provident molestias amet. Optio, ipsam. Accusamus
            veniam enim iusto rerum temporibus explicabo, doloribus nihil hic
            iste unde, aliquid quisquam nisi, omnis excepturi molestiae placeat
            ipsam sequi officia sint! 
            </p>
            
            <p>
            Quaerat quis dolore beatae distinctio
            rerum unde natus temporibus commodi eveniet voluptate, facere
            nesciunt vel aspernatur reiciendis, dolor itaque expedita doloribus
            ad maiores? Atque doloribus reprehenderit iste cumque ratione, quod
            tenetur aut nemo dolorum animi consequatur enim laborum id odit esse
            dicta. Rerum quae et officia, ad illo eum cupiditate ut, sequi
            maiores qui laborum eaque quaerat. Suscipit cumque nihil veritatis
            porro ut atque illum, ab, consequatur deleniti aliquam error
            repellat, quae nesciunt nulla autem? Magni modi sit explicabo fuga
            in id nam tempore corrupti repellendus aliquam natus alias error
            consequatur, voluptate minima, dolorum ab inventore ratione ut quasi
            velit! Modi voluptatibus commodi ipsum veritatis. Possimus obcaecati
            nihil illum quisquam quas! Laudantium at harum ex eligendi
            assumenda! Voluptatum perferendis molestias quos quisquam
            recusandae, corrupti minima mollitia blanditiis nulla quae itaque
            quia alias sit accusamus autem maiores! Itaque nulla vel eligendi
            quos id maxime tempore rem suscipit ducimus obcaecati, architecto
            qui repudiandae ut est facilis! Sequi laboriosam corrupti id quasi
            dignissimos mollitia eveniet fugiat! Autem quo a mollitia similique
            rerum? Voluptas vel libero labore dolor inventore? Expedita delectus
            reiciendis quia fugiat iusto nesciunt ipsum officiis ducimus magnam
            beatae! Doloremque maiores quae autem sit vitae nulla laudantium
            delectus esse aliquid. Perspiciatis harum sunt aperiam eaque esse
            minima sapiente itaque. Ipsam quo quas doloremque aspernatur animi,
            distinctio in suscipit aliquid vel dolorum! Laudantium porro odio
            expedita? Reiciendis veritatis est quia porro sunt magni veniam id
            voluptatum sint, rerum, aliquid mollitia alias? Dicta et debitis,
            tenetur odit nisi quos voluptate! Aliquid consequuntur aut facere
            tempora modi?
          </p>
        </section>
      </BackgroundHoc>
    </>
  );
};

export default Crew;
