import { HREF_HASH } from "./constants.js";
import { hideSectionByTagName, findUniqueElements } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  const content = HREF_HASH[hash];
  if (content && content !== "#all") {
    findUniqueElements(
      HREF_HASH["#all"].workExperienceIds,
      content.workExperienceIds
    ).map((id) => {
      hideSectionByTagName("h3", "h3", id);
    });
    findUniqueElements(
      HREF_HASH["#all"].skillsIds,
      content.skillsIds
    ).map((id) => {
      hideSectionByTagName("h3", "h3", id);
    });
   findUniqueElements(
      HREF_HASH["#all"].schoolIds,
      content.schoolIds
    ).map((id) => {
      hideSectionByTagName("p", "ul", id);
    });
  }
});
