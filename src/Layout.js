import { Outlet, Link, NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ menu }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavigationBar menu={menu} />
      <div className="mb-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <footer className="bg-[#4E342E] text-[#FFF8E7] mt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              React Demo
            </Link>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:underline me-4 md:me-6">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline me-4 md:me-6">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:underline me-4 md:me-6">
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function NavigationBar({ menu }) {

  return (
    <Disclosure as="nav" className="bg-[#FFF8E7]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-[#4E342E] hover:bg-[#D48E8E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-[#4E342E]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-[#4E342E]"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://static.aslanta.com/react-demo/logo.jpeg"
                    alt="React Demo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-[#D48E8E] text-[#A8E6CF]"
                            : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )
                      }
                      to=""
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-[#D48E8E] text-[#A8E6CF]"
                            : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )
                      }
                      to="/menu"
                    >
                      Menu
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-[#D48E8E] text-[#A8E6CF]"
                            : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )
                      }
                      to="/cart"
                    >
                      Cart
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-[#D48E8E] text-[#A8E6CF]"
                            : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )
                      }
                      to="/checkout"
                    >
                      Checkout
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  to="/cart"
                  type="button"
                  className="relative rounded-full p-1 text-[#4E342E] focus:outline-none px-2 py-1 hover:bg-[#FFC1CC]"
                >
                </Link>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-[#D48E8E] text-[#A8E6CF]"
                      : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
                to=""
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-[#D48E8E] text-[#A8E6CF]"
                      : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
                to="/menu"
              >
                Menu
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-[#D48E8E] text-[#A8E6CF]"
                      : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
                to="/cart"
              >
                Cart
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-[#D48E8E] text-[#A8E6CF]"
                      : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
                to="/checkout"
              >
                Checkout
              </NavLink>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
