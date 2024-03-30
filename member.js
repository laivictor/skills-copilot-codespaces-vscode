function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsValue = memberSkills.value;
  var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
  var memberSkillsArray = memberSkillsValue.split(",");
  var memberSkillsTextArray = memberSkillsText.split(",");
  var memberSkillsArrayLength = memberSkillsArray.length;
  var memberSkillsTextArrayLength = memberSkillsTextArray.length;
  var memberSkillsArrayLength = memberSkillsArrayLength - 1;
  var memberSkillsTextArrayLength = memberSkillsTextArrayLength - 1;

  if (memberValue == "none") {
    memberSkills.disabled = true;
    memberSkills.innerHTML = "<option value='none'>None</option>";
  } else {
    memberSkills.disabled = false;
    memberSkills.innerHTML = "<option value='none'>None</option>";
    for (var i = 0; i < memberSkillsArrayLength; i++) {
      if (memberSkillsArray[i] == memberValue) {
        memberSkills.innerHTML += "<option value='" + memberSkillsArray[i] + "' selected>" + memberSkillsTextArray[i] + "</option>";
      } else {
        memberSkills.innerHTML += "<option value='" + memberSkillsArray[i] + "'>" + memberSkillsTextArray[i] + "</option>";
      }
    }
  }
}