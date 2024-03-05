import { createContext, useEffect, useState, useContext } from "react";
import { Vibration } from "react-native";
import { Appearance } from "react-native";
import ngn from '../assets/images/ngn.png'
import gbp from '../assets/images/gbp.png'
import usd from '../assets/images/usd.png'
import eur from '../assets/images/cad.png'

const UserData = createContext();

const Veecontext = ({ children }) => {


  const accountCategory = [
    {
      name: "Profile",
      iconName: "account",
      subcategories: [
        "Edit Profile",
        "Change Email",
        "Change Phone Number",
        "Update Address",
        // Add more subcategories as needed
      ]
    },
    {
      name: "Account Verification",
      iconName: "account-box",
      subcategories: [
        "Verify Identity",
        "Verify Phone Number",
        "Verify Email Address",
        // Add more subcategories as needed
      ]
    },
    {
      name: "Notifications",
      iconName: "bell-ring",
      subcategories: [
        "Manage Notifications",
        "Notification Settings",
        "Turn Off Notifications",
        // Add more subcategories as needed
      ]
    }
  ];
  
  const financeCategory = [
    {
      name: "Cards",
      iconName: "credit-card",
      subcategories: [
        "View Cards",
        "Add New Card",
        "Remove Card",
        // Add more subcategories as needed
      ]
    },
    {
      name: "Transaction Limit",
      iconName: "credit-card-sync",
      subcategories: [
        "Set Transaction Limit",
        "View Transaction History",
        // Add more subcategories as needed
      ]
    }
  ];
  
  const securityCategory = [
    {
      name: "Change Password",
      iconName: "key-variant",
      subcategories: [
        "Update Password",
        "Forgot Password",
        // Add more subcategories as needed
      ]
    },
    {
      name: "MFA (Multi-Factor Authentication)",
      iconName: "security",
      subcategories: [
        "Enable MFA",
        "Disable MFA",
        // Add more subcategories as needed
      ]
    },
    {
      name: "Device and Sessions",
      iconName: "monitor-cellphone-star",
      subcategories: [
        "Manage Devices",
        "View Active Sessions",
        "Logout from Other Devices",
        // Add more subcategories as needed
      ]
    },
    {
      name: "Change PIN",
      iconName: "lock-alert",
      subcategories: [
        "Update PIN",
        "Forgot PIN",
        // Add more subcategories as needed
      ]
    }
  ];
  
  const othersCategory = [
    {
      name: "App Language",
      iconName: "web",
      subcategories: [
        "Change Language",
        // Add more subcategories as needed
      ]
    },
    {
      name: "Affiliate and Referrals",
      iconName: "web-sync",
      subcategories: [
        "Refer a Friend",
        "View Referral Program",
        // Add more subcategories as needed
      ]
    },

    {
      name: "See Our Rates",
      iconName: "source-pull",
      subcategories: [
        "View Rates",
        // Add more subcategories as needed
      ]
    }
  ];
  


  const UserAccounts = [
    {
      id: "1",
      name: "United States Dollar",
      logo: usd,
      shortname: "USD",
      balance:1000,
      currency: "USD",
      symbol: "$",
    },
    {
      id: "2",
      name: "Nigerian Naira",
      logo: ngn,
      shortname: "NGN",
      balance:2000,
      currency: "NGN",
      symbol: "₦",
    },
    {
      id: "3",
      name: "Euro",
      logo: gbp,
      shortname: "EUR",
      balance:1500,
      currency: "EUR",
      symbol: "€",
    },
    {
      id: "4",
      name: "British Pound Sterling",
      logo: eur,
      shortname: "GBP",
      balance:2500,
      currency: "GBP",
      symbol: "£",
    },
  ];

  const [appearanceMode, setAppearanceMode] = useState("");
  const [activeCurrency, setActiveCurrency] = useState(UserAccounts[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonPress = () => {
    // Vibrate for 500ms
    Vibration.vibrate(20);
  };

  const blockData = [
    {
      title: "Complete your KYC",
      subtitle: "For safe and seamless money transfers.",
      iconName: "doc",
      onPress: () => console.log("Pressed Block 1"),
    },
    {
      title: "Deposit into account",
      subtitle: "Make a deposit with confidence.",
      iconName: "briefcase",
      onPress: handleButtonPress,
    },
    {
      title: "Set-up virtual card",
      subtitle: "Establish your virtual card in a few steps",
      iconName: "credit-card",
      onPress: handleButtonPress,
    },
    {
      title: "Link bank account",
      subtitle: "Connect your bank account effortlessly.",
      iconName: "wallet",
      onPress: handleButtonPress,
    },
    // Add more block data as needed
  ];

  const data1 = [
    { key: "1", text: "Item 1", name: "Airtime", icon: "shake" },
    { key: "2", text: "Item 2", name: "Bills", icon: "bank" },
    { key: "3", text: "Item 3", name: "Betting", icon: "dribbble" },
    { key: "4", text: "Item 1", name: "Reffer", icon: "switcher" },
    { key: "5", text: "Item 2", name: "Education", icon: "book" },
    { key: "6", text: "Item 3", name: "Transportation", icon: "car" },
    { key: "7", text: "Item 2", name: "Power", icon: "bulb1" },
    { key: "8", text: "Item 3", name: "Investment", icon: "linechart" },
  ];

  const data2 = [
    { key: "1", text: "Item 1", name: "Booking", icon: "airplane" },
    {
      key: "2",
      text: "Item 2",
      name: "Budgeting",
      icon: "calculator-variant-outline",
    },
    { key: "3", text: "Item 3", name: "Scheduler", icon: "send-clock-outline" },
    { key: "4", text: "Item 1", name: "Charity", icon: "charity" },
    {
      key: "5",
      text: "Item 2",
      name: "Debit Card",
      icon: "credit-card-outline",
    },
    { key: "6", text: "Item 3", name: "Scan To Pay", icon: "line-scan" },
    { key: "7", text: "Item 2", name: "Nearby Pos", icon: "map-check-outline" },
    { key: "8", text: "Item 3", name: "Safe Lock", icon: "safe" },
  ];



  const handleChangeCurrency = (currency) => {
    setActiveCurrency(currency);
  };

  const toggleAppearanceMode = () => {
    if (appearanceMode === "light") {
      Appearance.setColorScheme("dark");
      setAppearanceMode("dark");
    } else if (appearanceMode === "dark") {
      Appearance.setColorScheme("light");
      setAppearanceMode("light");
    } else {
      // If appearanceMode is null or undefined (i.e., automatic), you can set it to a default value
      Appearance.setColorScheme("dark"); // Or any other default value
      setAppearanceMode("dark");
    }
  };

  return (
    <UserData.Provider
      value={{
        isOpen,
        setIsOpen,
        amt: "$ 500,000",
        handleButtonPress,
        data2,
        data1,
        blockData,
        toggleAppearanceMode,
        handleChangeCurrency,
        UserAccounts,
        activeCurrency,
        accountCategory ,
        financeCategory ,
        securityCategory ,
        othersCategory ,
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </UserData.Provider>
  );
};

export { Veecontext, UserData };
