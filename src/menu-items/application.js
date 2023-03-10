// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    type: 'group',
    children: [
        // {
        //     id: 'users',
        //     title: <FormattedMessage id="users" />,
        //     type: 'collapse',
        //     icon: icons.IconUserCheck,
        //     children: [
        //         {
        //             id: 'posts',
        //             title: <FormattedMessage id="social-profile" />,
        //             type: 'item',
        //             url: '/user/social-profile/posts'
        //         },
        //         {
        //             id: 'account-profile',
        //             title: <FormattedMessage id="account-profile" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'profile1',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="profile" /> 01
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/account-profile/profile1'
        //                 },
        //                 {
        //                     id: 'profile2',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="profile" /> 02
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/account-profile/profile2'
        //                 },
        //                 {
        //                     id: 'profile3',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="profile" /> 03
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/account-profile/profile3'
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'user-card',
        //             title: <FormattedMessage id="cards" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'card1',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="style" /> 01
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/card/card1'
        //                 },
        //                 {
        //                     id: 'card2',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="style" /> 02
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/card/card2'
        //                 },
        //                 {
        //                     id: 'card3',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="style" /> 03
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/card/card3'
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'user-list',
        //             title: <FormattedMessage id="list" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'list1',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="style" /> 01
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/list/list1'
        //                 },
        //                 {
        //                     id: 'list2',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="style" /> 02
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/user/list/list2'
        //                 }
        //             ]
        //         }
        //     ]
        // },

        {
            id: 'customer-list',
            title: <FormattedMessage id="customer-list" />,
            type: 'item',
            url: '/customer/customer-list',
            breadcrumbs: false
        },
        {
            id: 'order-list',
            title: <FormattedMessage id="order-list" />,
            type: 'item',
            url: '/customer/order-list',
            breadcrumbs: false
        },
        {
            id: 'create-invoice',
            title: <FormattedMessage id="create-invoice" />,
            type: 'item',
            url: '/customer/create-invoice',
            breadcrumbs: false
        },
        {
            id: 'order-details',
            title: <FormattedMessage id="order-details" />,
            type: 'item',
            url: '/customer/order-details'
        },
        {
            id: 'product',
            title: <FormattedMessage id="product" />,
            type: 'item',
            url: '/customer/product',
            breadcrumbs: false
        },
        {
            id: 'product-review',
            title: <FormattedMessage id="product-review" />,
            type: 'item',
            url: '/customer/product-review',
            icon: icons.IconBasket,
            breadcrumbs: false
        }
        // {
        //     id: 'projects',
        //     title: <FormattedMessage id="Projects" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'customer-list',
        //             title: <FormattedMessage id="customer-list" />,
        //             type: 'item',
        //             url: '/customer/customer-list',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'order-list',
        //             title: <FormattedMessage id="order-list" />,
        //             type: 'item',
        //             url: '/customer/order-list',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'create-invoice',
        //             title: <FormattedMessage id="create-invoice" />,
        //             type: 'item',
        //             url: '/customer/create-invoice',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'order-details',
        //             title: <FormattedMessage id="order-details" />,
        //             type: 'item',
        //             url: '/customer/order-details'
        //         },
        //         {
        //             id: 'product',
        //             title: <FormattedMessage id="product" />,
        //             type: 'item',
        //             url: '/customer/product',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'product-review',
        //             title: <FormattedMessage id="product-review" />,
        //             type: 'item',
        //             url: '/customer/product-review',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default application;
