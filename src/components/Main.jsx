import React from 'react'

const Main = () => {
  return (
    <div className='container py-3'>
      <main>
        <div className='row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center'>
          <div className='col py-5'>
            <div className='card md-5 rounded'>
              <div className='card-header'>
                <p>
                  СПА ОТЕЛЬ ВЕРШИНЫ
                </p>
                <img className='rounded' src='img/1.jpeg' width={'90%'}></img>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main