import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import productActions from '../../actions/product/deleteProduct';
import AdminNavbar from '../admin-navbar/admin-navbar';

const {
  updateProduct,
} = productActions;
class UpdateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category: '',
      image: '',
      price: '',
      brand: '',
      due_time: '',
      quantity: '',
      description: EditorState.createEmpty()
    };
  }
  handleSubmit = (e,id) => {
    e.preventDefault();
    const des = convertToRaw(this.state.description.getCurrentContent())
    console.log('update', des);
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('category', this.state.category);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    formData.append('price', this.state.price.split(' ')[0]);
    formData.append('brand', this.state.brand);
    formData.append('due_time', this.state.due_time);
    formData.append('quantity', this.state.quantity);
    formData.append('description', JSON.stringify(des));
    this.props.updateProduct(id,formData);
  };
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  categoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  imageChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.files) {
      this.setState({ [event.target.id]: event.target.files[0] });
    }
  };

  priceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  brandChange = (event) => {
    this.setState({ brand: event.target.value });
  };

  due_timeChange = (event) => {
    this.setState({ due_time: event.target.value });
  };

  quantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };
  onChange = (value) => {
    this.setState({description:value});
  };
  componentDidMount(){
    let description='';
    const product = this.props.location.state?this.props.location.state.product:null;
    if (product.description){
      description = JSON.parse(product.description);
      const contentState = convertFromRaw(description);
      description = EditorState.createWithContent(contentState);
    }
    if(product){
    this.setState({
      name:product.name,
      category:product.category,
      brand:product.brand,
      image:product.image,
      price:product.price,
      due_time:product.due_time,
      quantity:product.quantity,
      description:description,
    });}
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.productErrors && toast.error(nextProps.productErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const product = this.props.location.state?this.props.location.state.product:null;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const toolbarConfig = {
      options: [
        'inline', 
        'blockType', 
        'fontSize', 
        'fontFamily', 
        'list',
        'textAlign',
        'history'
      ],
      inline: {
        inDropdown: false,
        options: ['bold', 'italic', 'underline', 'strikethrough'],
      },
      list: {
        inDropdown: false,
        options: ['unordered', 'ordered'],
      },
      blockType: {
        inDropdown: true,
        options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
      },
      fontFamily: {
        options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
      },
      textAlign: {
        inDropdown: false,
        options: ['left', 'center', 'right', 'justify'],
      },       
    }
    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    if (!this.props.location.state) {
      return <Redirect to='/displayproduct'/>
    }
    return (
      <div id='layout'>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <AdminNavbar/>
          <div className='formProduct'>
            <div className='headerProduct'>
              <h3 className='text-center font-weight-light my-4'>
                Update Product
              </h3>
            </div>
            <div className='bodyProduct'>
              <form className='form-group' onSubmit={(event)=>{this.handleSubmit(event,product.id)}}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Name</label>
                    <input
                      name='name'
                      className='form-control py-4'
                      value={this.state.name}
                      placeholder='Enter the name of the product'
                      onChange={this.nameChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Category</label>
                    <input
                      name='category'
                      className='form-control py-4'
                      value={this.state.category}
                      placeholder='Enter the category'
                      onChange={this.categoryChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Price</label>
                    <input
                      name='price'
                      className='form-control py-4'
                      value={this.state.price}
                      placeholder='Enter the price'
                      onChange={this.priceChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Brand</label>
                    <input
                      name='brand'
                      className='form-control py-4'
                      value={this.state.brand}
                      placeholder='Enter the brand'
                      onChange={this.brandChange}
                    ></input>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Image</label>
                    <br></br>
                    <input
                      type='file'
                      className=''
                      id='image'
                      onChange={this.imageChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Due Time</label>
                    <input
                      name='due_time'
                      className='form-control py-4'
                      value={this.state.due_time}
                      placeholder='Enter the due time'
                      onChange={this.due_timeChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Quantity</label>
                    <input
                      name='quantity'
                      className='form-control py-4'
                      value={this.state.quantity}
                      placeholder='Enter the quantity'
                      onChange={this.quantityChange}
                    ></input>
                  </div>
                </div>
                <br />
                <div style={{border:'1px solid #8f8d8d', borderRadius:'1%'}}>
                  <Editor
                    toolbar={toolbarConfig}
                    editorState={this.state.description}
                    onEditorStateChange={this.onChange}
                  />
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block'>
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ updateProduct: { loading, productErrors, message } }) => ({
  loading,
  productErrors,
  message,
});
export default connect(mapStateToProps, {
  updateProduct:updateProduct,
})(UpdateProduct);
