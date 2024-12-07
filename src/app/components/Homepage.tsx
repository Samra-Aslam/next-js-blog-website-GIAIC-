import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from 'next/link';

const Homepage = () => {
    
  return (
    <div className='homepage'>
     <h1>Shorts Tech<span> Blogs</span></h1>
    
     <div className='box2'>
            <div className='boxa'>
            <div className='header'>All Blogs</div>
            <div className='boxmain'>
             
             {/* blog 1 code here */}
              <div className='blog'>
              <div className='img1'  style={{backgroundColor:'orange'}}><FaHtml5 /></div>
              <div className='text'>
                <h3>What is HTML?</h3>
                <p>HTML is programming lAnguage .......</p>
                <button className='HTML'><Link href='/html'>Read More</Link></button>
              </div></div>

               {/* blog 2 code here */}
              <div className='blog'>
              <div className='img1' style={{backgroundColor:'skyblue'}}><IoAnalyticsSharp /></div>
              <div className='text'>
                <h3>What is CSS?</h3>
                <p>CSS is programming lAnguage .......</p>
                <button className='HTML'><Link href='/css'>Read More</Link></button>
              </div></div>

                 {/* blog 3 code here */}
              <div className='blog'>
              <div className='img1'style={{backgroundColor:'yellow'}}><TbBrandJavascript /></div>
              <div className='text'>
                <h3>What is JAVASCRIPT?</h3>
                <p>JAVASCRIPT is programming lAnguage </p>
                <button className='HTML'><Link href='/java'>Read More</Link></button>
              </div></div>

                 {/* blog 4 code here */}
              <div className='blog'>
              <div className='img1' style={{backgroundColor:'cyan'}}><TbBrandTypescript /></div>
              <div className='text'>
                <h3>What is TYPESCRIPT?</h3>
                <p>TYPESCRIPT is programming lAnguage </p>
                <button className='HTML'><Link href='/typescript'>Read More</Link></button>
              </div></div>


                 {/* blog 5 code here */}
              <div className='blog'>
              <div className='img1' style={{backgroundColor:'blue'}}><GrReactjs /></div>
              <div className='text'>
                <h3>What is REACT JS?</h3>
                <p>REACT JS is programming lAnguage .......</p>
                <button className='HTML'><Link href='/react'>Read More</Link></button>
              </div></div>


                 {/* blog 6 code here */}
              <div className='blog'>
              <div className='img1' style={{backgroundColor:'green'}}><TbBrandNextjs /></div>
              <div className='text'>
                <h3>What is NEXT JS?</h3>
                <p>NEXT JS is programming lAnguage .......</p>
                <button className='HTML'><Link href='/nextjs'>Read More</Link></button>
              </div></div>



                 {/* blog 7 code here */}
              <div className='blog'>
              <div className='img1' style={{backgroundColor:'yellow'}}><BsBootstrap /></div>
              <div className='text'>
                <h3>What is BOOTSTRAP?</h3>
                <p>BOOTSTRAP is programming lAnguage </p>
                <button className='HTML'><Link href='/bootstrap'>Read More</Link></button>
              </div></div>


                 {/* blog 8 code here */}
              <div className='blog'>
              <div className='img1' style={{backgroundColor:'green'}}><FaRegFileExcel /></div>
              <div className='text'>
                <h3>What is EXCEL?</h3>
                <p>EXCEL is  .......</p>
                <button className='HTML'><Link href='/excel'>Read More</Link></button>
              </div></div>


                 {/* blog 9 code here */}
             <div className='blog'>
              <div className='img1' style={{backgroundColor:'blue'}}><IoDocumentTextOutline /></div>
              <div className='text'>
                <h3>What is MS WORLD?</h3>
                <p>MS WORLD is  .......</p>
                <button className='HTML'><Link href='/world'>Read More</Link></button>
              </div></div>
              </div>

        </div>
        <div className='header2'>New Blogs</div>
               <div className='boxb'>
        
        {/* blog 1 code here */}
        <div className='blogb'>
              <div className='img1' style={{backgroundColor:'orange'}}><FaHtml5 /></div>
              <div className='text'>
                <h3>What is HTML?</h3>
                <p>HTML is programming lAnguage .......</p>
                <button className='HTML'><Link href='/html'>Read More</Link></button>
              </div></div>

               {/* blog 2 code here */}
            <div className='blogb'>
              <div className='img1' style={{backgroundColor:'skyblue'}}><IoAnalyticsSharp /></div>
              <div className='text'>
                <h3>What is CSS?</h3>
                <p>CSS is programming lAnguage .......</p>
                <button className='HTML'><Link href='/css'>Read More</Link></button>
              </div></div>

                   {/* blog 8 code here */}
                   <div className='blogb'>
              <div className='img1' style={{backgroundColor:'green'}}><FaRegFileExcel /></div>
              <div className='text'>
                <h3>What is EXCEL?</h3>
                <p>EXCEL is  .......</p>
                <button className='HTML'><Link href='/excel'>Read More</Link></button>
              </div></div>


        </div>
        </div>
     </div>
    
  )
}

export default Homepage