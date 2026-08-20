import ChessPlay from '../components/ChessPlay';



function Home() {
    return (


        <div className="flex flex-col bg-amber-200 w-full min-h-dvh m-auto">

            <div className="flex self-center ">
                <ChessPlay />

                <div className='flex flex-col self-center bg-amber-50 '>
                    <h1 className='text-4xl ' >Play Chess with Us!</h1>
                    <input type="button" value="Start" className='bg-amber-900 w-1/2 self-center rounded-md text-white ' />
                </div>

            </div>


        </div>
    )
}

export default Home;