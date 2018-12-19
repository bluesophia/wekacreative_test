import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import FeaturesCard from '../FeaturesCard';
import ArrowLeft from '../Arrows/arrowLeft';
import ArrowRight from '../Arrows/arrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import Slider from "react-slick";

const ArrowPosition = [
  {sm : '-10px'},
  {md : '-50px'},
  {lg : '-70px'}
]

class FeaturesCarousel extends Component {
render () {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots:true,
    arrows:true,
    nextArrow: <ArrowRight position={ArrowPosition}/>,
    prevArrow: <ArrowLeft position={ArrowPosition}/>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
      return (
        <Slider {...settings}>
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "exchange-alt"
            title = "Connecting Office-to-Field Workers"
            text = "Increase connectivity to office-to-field workers and vice versa. Helping you to collaborate and communicate more effectively with colleagues out in the field in real-time."

            />
            <FeaturesCard 
            iconName = "briefcase"
            title = "Job management"
            text = "Whether in the office, or in the field, feel more in control of all of your jobs on the go from start to completion. EasyForms job management solution includes, but is not limited to; job history, job details, scheduling, planning, tracking and everything in between. With everything you need in one location, making it easy to manage and send data and project information."
            />
            <FeaturesCard 
            iconName = "calendar-check"
            title = "Project Management"
            text = "Providing you with better control and visibility of all jobs and staff from the office. Project management made easy! View everything you need to in relation to the many jobs you are managing at a glance. Assign jobs and tasks from the office and track timelines in real-time."
            />
            <FeaturesCard 
            iconName = "project-diagram"
            title = "Health and Safety"
            text = "Streamline your health and safety processes and documentation via our app-based solution. Helping you to drive more efficient health and safety processes as dictated by you."
            />
            <FeaturesCard 
            iconName = "heartbeat"
            title = "Timesheets"
            text = "With real-time tracking capabilities, you can now feel confident when it comes to tracking hours spent on jobs. Say goodbye to lost pieces of paper scribbled with hours and complete the process through our easy-to-use app. Managers can then easily view and approve time and job sheet information. The capabilities are virtually endless."
            />
            <FeaturesCard 
            iconName = "clock"
            title = "Quoting"
            text = "Mobilising and standardising quoting – quote instantly in the field and send directly to the client in real-time. Streamline your quoting processes while giving you the ability to link to your product lists and look-up products through drop down lists making quoting more accurate and efficient."
            />
            <FeaturesCard 
            iconName = "file-alt"
            title = "Purchase Orders"
            text = "Create purchase orders on the spot through our app, saving you time and double-handling. Keeping things in order! Allocate, order inventory and have complete visibility of stock levels across the business from one place."
            />
            <FeaturesCard 
            iconName = "boxes"
            title = "Inventory Management"
            text = "Manage assets and inventory on site, or wherever you are with ease. Keeping things in order! Allocate, order inventory and have complete visibility of stock levels across the business from one place."
            />
            <FeaturesCard 
            iconName = "plane"
            title = "Leave Forms"
            text = "Leave forms can be managed and entered via an app from anywhere, at anytime. Leave form data can then be driven back into your accounting software. Managers can be sent notifications on their device for instant authorisation."
            />
            <FeaturesCard 
            iconName = "money-bill-alt"
            title = "Sales"
            text = "Have increased visibility of customer information, sales targets, leads, with the ability to link calendar appointments to your CRM and reports (with GPS tracking), plus much more. Giving you the ability to move data and information more efficiently. We can customise a design specifically for your business needs."
            />
            <FeaturesCard 
            iconName = "chart-line"
            title = "Reporting"
            text = "At a glance, view profit lost or made on all jobs, plus much more in real-time. View well designed, clear reports giving you greater transparency and increased insights across your business so you can stay ahead of the game."
            />
            <FeaturesCard 
            iconName = "file-invoice"
            title = "Invoicing"
            text = "We can provide greater efficiency around invoicing, where lost timesheets, invoices and so on are a thing of the past. Invoicing made easy! Our easy-to-use app can direct the data of your choice to your accounting software."
            />
            <FeaturesCard 
            iconName = "location-arrow"
            title = "GPS Tracking"
            text = "Have better visibility of your fleet’s location at all times plus more. Our app can give you accurate data that is updated with your fleets location on the spot. This data can then link to timesheets so you can view exactly how much time is being spent on a job or project."
            />
      </Slider>
      );
    }
  }

export default FeaturesCarousel;