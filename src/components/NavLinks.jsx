import { useGlobalContext } from "../Context";
import subLinks from "../data";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {subLinks.map(({ pageId, page }) => {
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseOver={() => {
              setPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
