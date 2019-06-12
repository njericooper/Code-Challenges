function toggle(dropDown, dropDownParent) {
    var openClose = document.getElementById(dropDown);
        if (openClose.style.visibility != 'visible') {
        openClose.style.visibility = 'visible';
        document.getElementById(dropDownParent).setAttribute('aria-expanded', 'true');
        } else {
            openClose.style.visibility = 'hidden';
            document.getElementById(dropDownParent).setAttribute('aria-expanded', 'false');
    }
}