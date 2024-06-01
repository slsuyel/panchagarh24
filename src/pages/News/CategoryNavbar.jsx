import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import useCategories from '../../hooks/useCategories';
import { organizeCategories } from '../../utils/functions';
import logo from '../../assets/images/logo.jpeg'
const CategoryNavbar = () => {
    const { categories, isLoading } = useCategories();

    if (isLoading) {
        return null
    }

    const reArrCategories = organizeCategories(categories);

    return (
        <nav className="d-md-block d-none d-sm-block fs-5 mb-3 navbar-expand-lg news-menubar px-4 py-2  rounded-0 top-0">
            <ul className="justify-content-evenly navbar-nav w-100">

                <li className="nav-item bg-white" >
                    <Link className='nav-link text-white px-3'
                        to='/news'> <img src={logo} alt="" width={180} />
                    </Link>
                </li>

                {/* <li className="nav-item" >
                    <Link className='nav-link text-white'
                        to='/news'> প্রচ্ছদ
                    </Link>
                </li> */}
                {reArrCategories.map((category) => (
                    <li className="nav-item" key={category.slug}>
                        {category.children && category.children.length > 0 ? (

                            <Dropdown>
                                <Dropdown.Toggle style={{ fontSize: '20px' }} className='bg-transparent border-0' id={`dropdown-${category.slug}`}>
                                    {category.label}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {category.children.map((subcategory) => (
                                        <Dropdown.Item key={subcategory.slug}>
                                            <Link className="dropdown-item "
                                                to={`/news/category/${subcategory.slug}`}>
                                                {/* to={`/category/${category.slug}/${subcategory.slug}`}> */}
                                                {subcategory.label}
                                            </Link>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Link className="nav-link text-white mx-1" to={`/news/category/${category.slug}`}>
                                {category.label}
                            </Link>
                        )}
                    </li>
                ))}
                <li className="nav-item" >
                    <Link className='nav-link text-white'
                        to='/archive'> আর্কাইভ
                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default CategoryNavbar;
