import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, X } from 'lucide-react';
import { useWalletStore } from '../store/walletStore';

const Navbar: React.FC = () => {
  const { connected, address, balance, connect, disconnect } = useWalletStore();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-full mr-2">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">CrossFi-Aurora</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">
              Dashboard
            </Link>
            <Link to="/strategies" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">
              AI Strategies
            </Link>
            <Link to="/swap" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">
              Swap
            </Link>
            <Link to="/bridge" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">
              Bridge
            </Link>
            
            {connected ? (
              <div className="flex items-center ml-4">
                <div className="px-3 py-1 bg-indigo-700 rounded-l-md">
                  <span className="text-xs font-medium">Aurora</span>
                </div>
                <button 
                  onClick={disconnect}
                  className="flex items-center px-3 py-1 bg-indigo-800 rounded-r-md hover:bg-indigo-700"
                >
                  <span className="text-sm mr-2">{balance.toFixed(3)}</span>
                  <span className="text-xs truncate w-20">{address}</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={connect}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md text-sm font-medium hover:from-pink-600 hover:to-purple-700"
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-800 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/strategies" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Strategies
            </Link>
            <Link 
              to="/swap" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Swap
            </Link>
            <Link 
              to="/bridge" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bridge
            </Link>
            
            {connected ? (
              <div className="flex items-center px-3 py-2">
                <div className="px-3 py-1 bg-indigo-700 rounded-l-md">
                  <span className="text-xs font-medium">Aurora</span>
                </div>
                <button 
                  onClick={disconnect}
                  className="flex items-center px-3 py-1 bg-indigo-800 rounded-r-md hover:bg-indigo-700"
                >
                  <span className="text-sm mr-2">{balance.toFixed(3)}</span>
                  <span className="text-xs truncate w-20">{address}</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  connect();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md text-sm font-medium hover:from-pink-600 hover:to-purple-700"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;