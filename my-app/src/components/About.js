import React from 'react'

export default function About() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            About Us
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Welcome to TextCraft, your go-to online tool for performing various text operations! Whether you need to convert text cases, count characters and words, copy text, or perform other text-related tasks, we've got you covered.</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Our Mission
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>At TextCraft, our mission is to provide a simple and efficient platform for users to manipulate text according to their needs. We understand the importance of text processing in various contexts, from content creation to data analysis, and we're dedicated to making these tasks easier for you.</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Why Choose TextCraft?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>User-Friendly: Our interface is designed with simplicity in mind. You don't need to be a tech expert to use our tools effectively.
              <hr />
              Fast and Accurate: Perform text operations instantly and accurately. No need to download or install any software.
              <hr />
              No Registration Required: You can start using TextUtils right away without the hassle of creating an account.
              <hr />
              Free to Use: All of our text manipulation tools are available for free. We believe in providing valuable resources without any cost to our users.</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
