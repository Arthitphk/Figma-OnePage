import React from 'react'
import Rectangle from '../Images/Rectangle.png'


const Main = () => {
  return (
    <div>
        <div className="container mx-auto my-56">
            <div className="2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2">
              <div className="">
                    <div>
                        <div className='p-10'>
                            <h2 className='text-5xl font-bold'>Light, Fast & Powerful</h2>
                            <p className="my-10 2xl:text-2xl xl:text-2xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                mus. <br/><br/>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </p> 
                        </div>

                        <div className='flex p-10'> 
                            < div className='flex-1'>
                                <img src='src\Images\Left.png' alt=''/>
                                <h2 className='text-2xl font-bold mt-5'>Light, Fast & Powerful</h2>
                                <p className="mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            </div>

                            < div className='flex-1'>
                                <img src='src\Images\Left.png' alt=''/>
                                <h2 className='text-2xl font-bold mt-5'>Light, Fast & Powerful</h2>
                                <p className="mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            </div>
                        </div>   
                        
                    </div>        
              </div>
              <div className="m-20">
                <img src="src\Images\undraw_mobile_login_ikmv.png" alt=""/>         
              </div>
            </div>

            <div className='container mx-auto my-56 '>
                <div className='2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 p-10'>
                    <div>
                        <img src='src\Images\undraw_happy_news_hxmt.png' alt='' className='h-auto w-auto'/>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-2xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-bold'>Light, Fast & Powerful</h2>
                        <p className="my-10 2xl:text-2xl xl:text-2xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. <br/><br/>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p> 
                    </div>
                </div>

                <div className='2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 p-10'>
                    <div>
                        <img src='src\Images\undraw_social_influencer_sgsv.png' alt=''/>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-2xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-bold'>Light, Fast & Powerful</h2>
                        <p className="my-10 2xl:text-2xl xl:text-2xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. <br/><br/>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p> 
                    </div>
                </div>

                <div className='2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 p-10'>
                    <div>
                        <img src='src\Images\undraw_mention_6k5d.png' alt=''/>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-2xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-bold'>Light, Fast & Powerful</h2>
                        <p className="my-10 2xl:text-2xl xl:text-2xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. <br/><br/>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p> 
                        <button class="bg-Themecolor2 hover:bg-Themecolor1  text-Themewhite font-bold py-2 px-11">
                            Purchase Now
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>   

        
        <div className='bg-cover'  style={{ backgroundImage: `url(${Rectangle})`, backgroundRepeat:'no-repeat'}}>
           <div className='container mx-auto pt-96'>
                <div className='text-center'>
                    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-Themecolor2 font-bold">A Price To Suit Everyone</h1>
                    <p className="my-10 2xl:text-2xl xl:text-2xl lg:text-2xl 2xl:px-40">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                </div>
                <div className='text-center'>
                    <h1 className="text-7xl text-Themecolor2 font-bold">$40</h1>
                    <p className="my-5 text-2xl">UI Design Kit</p>
                </div>
                <div className='text-center pb-72 '>
                    <p className="my-10 text-2xl">See, One price. Simple.</p>
                    <button class="bg-Themecolor2 hover:bg-pink-700 hover:bg-Themecolor1 text-Themewhite font-bold py-2 px-11">
                        Purchase Now
                    </button>
                </div>
           </div>
        </div>
    
    </div>
  )
}

export default Main