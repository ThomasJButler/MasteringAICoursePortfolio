import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  initialIsIntersecting?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
    initialIsIntersecting = false,
  } = options;

  const elementRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);
  const frozen = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (frozen.current && freezeOnceVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (isElementIntersecting && freezeOnceVisible) {
          frozen.current = true;
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [elementRef, isIntersecting];
}

export function useMultipleIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): {
  observe: (element: T) => void;
  unobserve: (element: T) => void;
  entries: Map<T, boolean>;
} {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options;

  const [entries, setEntries] = useState<Map<T, boolean>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const frozenElements = useRef<Set<T>>(new Set());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (observerEntries) => {
        setEntries((prevEntries) => {
          const newEntries = new Map(prevEntries);
          
          observerEntries.forEach((entry) => {
            const element = entry.target as T;
            const isIntersecting = entry.isIntersecting;
            
            newEntries.set(element, isIntersecting);
            
            if (isIntersecting && freezeOnceVisible && !frozenElements.current.has(element)) {
              frozenElements.current.add(element);
              observerRef.current?.unobserve(element);
            }
          });
          
          return newEntries;
        });
      },
      { threshold, root, rootMargin }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  const observe = (element: T) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
      setEntries((prev) => new Map(prev).set(element, false));
    }
  };

  const unobserve = (element: T) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
      setEntries((prev) => {
        const newEntries = new Map(prev);
        newEntries.delete(element);
        return newEntries;
      });
    }
  };

  return { observe, unobserve, entries };
}