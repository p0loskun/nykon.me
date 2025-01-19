import { Component } from "react";
import { withRouter, NextRouter } from "next/router";
import gsap from "gsap";
import clsx from "clsx";
import isMobile from "@utils/isMobile";

/**
 * Cursor properties.
 * <p>It contains the router object to listen to route changes.</p>
 */
declare interface CursorProps {
  /** Router object. */
  router: NextRouter;
}

/**
 * Cursor state.
 * <p>It contains the {@link isVisible visibility state} of the cursor.</p>
 */
declare interface CursorState {
  /** Visibility state of the cursor. */
  isVisible: boolean;
}

/**
 * Cursor component.
 * <p>It displays a cursor that follows the mouse position, and scales when
 * hovering over elements.</p>
 * <p>It also hides the cursor when the mouse leaves the window.</p>
 * <p>The cursor is not displayed on mobile devices.</p>
 */
class Cursor extends Component<CursorProps, CursorState> {
  private cursorRef: HTMLElement | null = null;
  private xTo: gsap.QuickToFunc | null = null;
  private yTo: gsap.QuickToFunc | null = null;
  private detachHoverEvents: (() => void) | null = null;
  private detachObserver: (() => void) | null = null;

  constructor(props: CursorProps) {
    super(props);

    this.state = { isVisible: false };
  }

  /**
   * Called after the component mounts to attach event listeners.
   * <p>It attaches the mouse move and mouse out event listeners to the window.</p>
   * <p>If the user is on a mobile device, the cursor will not be displayed.</p>
   *
   * @see onMouseMove
   * @see onMouseOut
   * @see attachHoverListeners
   */
  componentDidMount() {
    if (isMobile(navigator.userAgent)) {
      return;
    }

    this.cursorRef = document.getElementById("cursor");

    if (!this.cursorRef) {
      return;
    }

    this.xTo = gsap.quickTo(this.cursorRef, "left", {
      duration: 0.2,
      ease: "power3",
    });
    this.yTo = gsap.quickTo(this.cursorRef, "top", {
      duration: 0.2,
      ease: "power3",
    });

    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseout", this.onMouseOut);

    this.attachHoverListeners();

    this.props.router.events.on(
      "routeChangeComplete",
      this.attachHoverListeners,
    );

    this.detachObserver = this.observeDOMChanges();
  }

  /**
   * Called before the component unmounts to remove event listeners.
   * <p>It removes the mouse move and mouse out event listeners from the
   * window and the hover listeners from the elements.</p>
   *
   * @see detachHoverEvents
   * @see attachHoverListeners
   */
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseout", this.onMouseOut);
    this.detachHoverEvents?.();

    this.props.router.events.off(
      "routeChangeComplete",
      this.attachHoverListeners,
    );
    this.detachObserver?.();
  }

  /**
   * Observe DOM changes to attach hover listeners to new elements.
   * <p>It observes the body element for changes in the child list and subtree
   * to attach hover listeners to new elements.</p>
   *
   * @returns A function to disconnect the observer.
   *
   * @see attachHoverListeners
   */
  observeDOMChanges = () => {
    const observer = new MutationObserver(() => {
      this.attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  };

  /**
   * Attach hover listeners to the elements.
   * <p>It removes the previous hover listeners and attaches new ones to the
   * elements.</p>
   *
   * @see attachHoverEvents
   */
  attachHoverListeners = () => {
    this.detachHoverEvents?.();
    this.detachHoverEvents = this.attachHoverEvents(
      document.querySelectorAll("a, button, .hover-target"),
    );
  };

  /**
   * Called when the mouse moves.
   * <p>It moves the cursor to the mouse position and makes it visible.</p>
   *
   * @param event Mouse move event.
   */
  onMouseMove = (event: MouseEvent) => {
    if (!this.state.isVisible) {
      gsap.to(this.cursorRef, { opacity: 1, scale: 1, duration: 0.3 });
      this.setState({ isVisible: true });
    }

    this.xTo?.(event.clientX);
    this.yTo?.(event.clientY);
  };

  /**
   * Called when the mouse leaves the window.
   * <p>It hides the cursor when the mouse leaves the window.</p>
   *
   * @param event Mouse out event.
   */
  onMouseOut = (event: MouseEvent) => {
    if (!event.relatedTarget) {
      gsap.to(this.cursorRef, { opacity: 0, scale: 0, duration: 0.3 });
      this.setState({ isVisible: false });
    }
  };

  /**
   * Scale the cursor to the specified value.
   *
   * @param value Scale value.
   */
  scaleCursor = (value: gsap.TweenValue) => {
    if (this.cursorRef) {
      gsap.to(this.cursorRef, { scale: value, duration: 0.35 });
    }
  };

  /**
   * Attach hover events to the elements.
   *
   * @param targets List of elements to attach the hover events.
   * @returns A function to detach the hover events.
   */
  attachHoverEvents = (targets: NodeListOf<Element>) => {
    const onMouseEnter = () => this.scaleCursor(3);
    const onMouseLeave = () => this.scaleCursor(1);

    targets.forEach((target) => {
      target.addEventListener("mouseenter", onMouseEnter);
      target.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", onMouseEnter);
        target.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  };

  /**
   * Render the cursor component.
   */
  render() {
    return (
      <div
        className={clsx(
          "w-4 h-4 fixed z-50 pointer-events-none",
          "transform translate-x-[-50%] translate-y-[-50%]",
          "bg-white rounded-full mix-blend-difference opacity-0",
        )}
        id="cursor"
      />
    );
  }
}

export default withRouter(Cursor);
