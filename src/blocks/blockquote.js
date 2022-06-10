const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon } = wp.components;
const { InnerBlocks, useBlockProps, MediaUpload, MediaUploadCheck} = wp.blockEditor;

registerBlockType("cert-blocks/blockquote", {
    title: __('Block Quote'),
    icon: 'format-quote',
    category: 'cert-block',
    description: __('Features a block quote with quotation images'),
    attributes: {},
    edit: (props) => {
        return(
          <div className="blockquote-editor">
              {/*Quote Text via paragraph InnerBlock*/}
			  <label>Add Inner Block - Quote</label>
              <InnerBlocks {...useBlockProps} 
                allowedBlocks={["core/quote"]}
                className="quote-edit"
              />
          </div>
        );
    },
    save: (props) => {
        const leftQuote = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/quote-left.png";
        const rightQuote = wpScriptsGlobal.pluginDirUrl + "cert-blocks/src/images/quote-right.png";

        return (
            <div data-aos="fade-up" className="block-quote">
                <div className="block-quote-content" >
                    <div className="quote-images">
                        <img src={leftQuote} className="left-qt-img" />
                        <img src={rightQuote} className="right-qt-img" />
                    </div>
                    <InnerBlocks.Content {...useBlockProps} />
                </div>
            </div>
        );
    }
})