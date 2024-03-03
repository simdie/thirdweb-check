import { createCampaign, dashboard, logout, payment, transactions, withdraw, copytrade, } from '../assets';
// import { useDisconnect } from "@thirdweb-dev/react";

// disconenct wallet
// const walletDisconnect = useDisconnect();

export const navlinks = [
  {
    name: 'Dashboard',
    imgUrl: dashboard,
    link: '/dashboard',
  },

  // {
  //   name: 'CopyTrade',
  //   imgUrl: copytrade,
  //   link: '/copytrade',
  // },

  {
    name: 'Transactions',
    imgUrl: transactions,
    link: '/transactions',
  },
  // {
  //   name: 'CreateCampaign',
  //   imgUrl: createCampaign,
  //   link: '/create-campaign',
  // },
 
  {
    name: 'Contact',
    imgUrl: withdraw,
    link: '/contact',
   
  },
 
  // {
  //   name: 'Logout',
  //   imgUrl: logout,
  //   link: '',
  //   disabled: true,

  // },
];
