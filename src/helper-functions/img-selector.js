export const placeholderChooseImage = wpScriptsGlobal.pluginDirUrl + "src/images/image-placeholder.svg";
export const placeholderImage       = wpScriptsGlobal.pluginDirUrl + "src/images/image-placeholder-no-text.jpg";

export const getImageButton = ( openEvent, property ) => {
    if (property) {
        return (
            <div class="selected-image">
                <img
                    src={property}
                    onClick={openEvent}
                />
            </div>
        );
    } else {
        return (
            <div class="placeholder-image">
                <img
                    src={placeholderChooseImage}
                    onClick={openEvent}
                />
            </div>
        );
    }
}
