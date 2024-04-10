import React from 'react';

function Home() {
  return (
    <div className='Home'>
      <div className='grid-flex'>
        <section className='reminders'>  {/* Use semantic element 'section' for reminders */}
          <h3>Reminders</h3>
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </section>
        <section className='leetcode-error-log'>  {/* Use semantic element 'section' for error log */}
          <h3>LeetCode</h3>  {/* Capitalize 'LeetCode' for proper naming */}
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </section>
        <div>
        <h5 className='form-use'>Use this form to fill in an train the model to help your leetcode journey</h5>
        <form className='form'>
          <label>Name of Problem</label>
          <input type='text'></input>

          <label>Difficulty</label>
          <input type='text'></input>

          <label>Name of Problem</label>
          <input type='text'></input>

          <label>Type</label>
          <input type='text'></input>
        </form>
        </div>

        <div className='AI-Bot'>
          Leetcode Problem of the Day ( Powered by AI ) : 
          <h5 className='problem'>Reverse a Linked List</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;