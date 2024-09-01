import React, { useState, useEffect } from 'react';
import { useModal } from '../context/Context';
import { dateToString } from '../utils/dateToString';
import Editor from './Editor/Editor';

import { IoCloseSharp } from "react-icons/io5";


const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    authorName: '',
    content: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const { isModalOpen, toggleModal, blogList, setBlogList } = useModal();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.title.trim()) {
      formErrors.title = 'Title is required';
    }
    if (!formData.authorName.trim()) {
      formErrors.authorName = 'Author name is required';
    }
    if (!formData.content.trim()) {
      formErrors.content = 'Content is required';
    }
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleEditorChange = (data) => {
    setFormData(prevData => ({
      ...prevData,
      content: data,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      content: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const currentDate = dateToString();
    const updatedFormData = { ...formData, date: currentDate };

    setBlogList([updatedFormData, ...blogList]);

    toggleModal();
    setFormData({
      title: '',
      authorName: '',
      content: '',
      date: '',
    });
    setErrors({});
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isModalOpen);
  }, [isModalOpen]);

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="form-modal-content">
           <div>
           <span onClick={toggleModal}  className='form-close-btn'><IoCloseSharp/></span>
            <form onSubmit={handleSubmit}>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && <p className="error">{errors.title}</p>}

              <label htmlFor='authorName'>Author Name</label>
              <input
                type='text'
                id='authorName'
                name='authorName'
                value={formData.authorName}
                onChange={handleChange}
              />
              {errors.authorName && <p className="error">{errors.authorName}</p>}

              <label htmlFor="content">Content :</label>
              <div className='editor-wrapper'>

              <Editor onEditorChange={handleEditorChange} content={formData.content} />
              </div>
              {errors.content && <p className="error">{errors.content}</p>}

              <button type="submit" className='form-submit-btn'>Submit</button>
            </form>
           </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
