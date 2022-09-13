import { useEffect } from "react";

export function useLocationTitle(title) {
  useEffect(() => {
    document.title = `${title} | Record Keeping Application`;
  });
}
