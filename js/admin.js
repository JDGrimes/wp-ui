var wpui_jqui_custom_theme_warning = false;

jQuery(document).ready(function() {
	jQuery( '#optionsform' ).wrap('<div class="tabwrap" />');

	$admin_tabs = jQuery('#optionsform #options-wrap').wptabs({
		 					h3Class: 'h3',
		 					effect: 'fade',
		 					topNav: false,
		 					botNav: true,
		 					cookies : false,
							hashchange : false
		});



		jQuery('#tab_scheme_trigger').click(function() {
			chooseTabStyles = initOpts.wpUrl + '/wp-admin/admin-ajax.php?action=WPUIstyles&TB_iframe=true';
			tb_show('Choose a WP UI style!', chooseTabStyles);
			return false;
		});
		
		window.send_to_editor = function(skin_name) {
			jQuery('#tab_scheme option').each(function() {
				if ( jQuery(this).attr("value") == skin_name )
					jQuery(this).attr( 'selected', 'selected' );
			});
			tb_remove();
		}

		jQuery('a.wpui_options_help').click(function() {
			jQuery('#contextual-help-link').click();
			return false;
		});

		
		// jQuery('#jqui_custom_themes').css({ display : 'none'});

			// var data = {
			// 	action : 'jqui_css'
			// }, response;			
			// 
			// jQuery.post( ajaxurl, data, function( response ) {
			// 	console.log( response ); 
			// 
			// 		return false;
			// 
			// 	});	
			

				// 	
				// 	themeList = jQuery('#jqui_theme_list');
				// 	themeList.append('<table class="widefat"><tbody>');
				// 	
				// 	if ( jQuery('#jqui_custom_themes').val() != '' ) {
				// 		fileList = JSON.parse( jQuery('#jqui_custom_themes').val() ); 
				// 	} else {
				// 		fileList = {};
				// 	}
				// 	themeTable = jQuery('table tbody', '#jqui_theme_list');
				// 	
				// 	themeTable
				// 		.before('<thead />')
				// 		.parent()
				// 		.find('thead')
				// 		.append('<tr><th>Name</th><th>Stylesheet</th><th>Manage</th></tr>');
				// 	
				// 	for ( key in fileList ) {
				// 		value = fileList[ key ];
				// 		themeTable
				// 			.append( '<tr />')
				// 			.find( 'tr:last' )
				// 			.append('<td width="10%">' + key + '</td><td><a target="_blank" href="'+ value + '">' + value + '</a></td><td width="10%"><a href="#" class="jqui-delete-theme">Delete</a></td>' );
				// 	}
				// 	
				// 	
				// 	jQuery( '<div style="display:none" title="Add a jQuery UI Custom theme" id="theme_add_form" />' )
				// 	.append( '<form />' )
				// 	.find('form')
				// 	.append( '<fieldset />' )
				// 	.find( 'fieldset' )
				// 	.append( '<div class="theme_add_notes" />')
				// 	.append( '<label for="jqui_theme_name">Name (CSS scope) <span> that will be used with the style argument</span></label>' )
				// 	.append( '<input id="jqui_theme_name" type="text" name="theme_name" class="ui-widget-content ui-corner-all" />' )
				// 	.append( '<label for="jqui_theme_url">Link <span>Absolute URL of the stylesheet</label>' )
				// 	.append( '<input id="jqui_theme_url" type="text" name="theme_url"  class="ui-widget-content ui-corner-all" />' )
				// 	.append( '<input id="jqui_theme_multiple" type="checkbox" name="theme_multiple"  class="ui-widget-content ui-corner-all" /><label for="jqui_theme_multiple">Keep on adding</label>' )
				// 	.end()
				// 	.end()
				// 	.appendTo( themeList );
				// 	
				// 
				// 	jQuery('#jqui_add_theme').click(function() {
				// 		jQuery( '#theme_add_form' ).dialog({
				// 			width: 400,
				// 			// show : 'slide',
				// 			// hide : 'fade',
				// 			buttons : {
				// 				"Cancel" : function() {
				// 					jQuery( this ).dialog( 'close' );
				// 				},
				// 				"Add" : function() {
				// 					insertDetails( 'add' );
				// 				}
				// 			},
				// 			open : function() {
				// 				jQuery( '.ui-button:first' , '.ui-dialog-buttonset' )
				// 					.addClass('cancel-button');
				// 				jQuery( '.ui-button:last' , '.ui-dialog-buttonset' )
				// 					.addClass('save-button');
				// 				
				// 			},
				// 			beforeClose : function() {
				// 				jQuery( '#theme_add_notes').find('ol').remove();
				// 			}
				// 
				// 		});
				// 		return false;
				// 	});
				// 
				// 
				// var insertDetails = function( status ) {
				// 	var formValid = true;
				// 	theme_name = jQuery('#jqui_theme_name');
				// 	theme_url = jQuery('#jqui_theme_url');
				// 	theme_mult = jQuery( '#jqui_theme_multiple' );
				// 	theme_notes = jQuery( 'div.theme_add_notes' );
				// 	formValidmsg = {};
				// 
				// 	
				// 	if ( theme_name.val() == '' ) {
				// 		formValid = false;
				// 		formValidmsg.name = "Name (CSS scope) should not be empty."					
				// 	}
				// 	if ( ! /^[\w\-_]*$/im.test( theme_name.val() ) ) {
				// 		formValid = false;
				// 		formValidmsg.name = "Name( CSS scope) , should contain only alphabets, digits, hyphens - and Underscore _."
				// 	}
				// 	
				// 	if ( ! /\b(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[\-A-Z0-9+&@#\/%=~_|$?!:,.]*[A-Z0-9+&@#\/%=~_|$]/i.test(theme_url.val()) ) {
				// 		formValid = false;
				// 		formValidmsg.url = "Please verify the link.";
				// 	}			
				// 
				// 	if ( formValid ) {
				// 		
				// 	if ( status == 'add' ) 	{
				// 		themeTable
				// 			.append('<tr>')
				// 			.find('tr:last')
				// 			.append(' <td> ' +
				// 					theme_name.val() +
				// 					'</td><td>' +
				// 					theme_url.val() + 
				// 					'</td><td>Delete</td></tr>'						
				// 		);
				// 		
				// 		fileList[ theme_name.val() ] = theme_url.val();
				// 		
				// 		if ( ! jQuery( '#jqui_theme_multiple').is(':checked') )
				// 			jQuery( '#theme_add_form' ).dialog( 'close' );
				// 		
				// 	} else if ( status == 'edit' ) {
				// 		parent.html( '<td>' + theme_name.val() + '</td><td>' + theme_url.val() + '</td><td>Delete</tr>');					
				// 		fileList[ theme_name.val() ] = theme_url.val();
				// 		
				// 	}
				// 		
				// 		jQuery( fileList ).trigger('change');
				// 		
				// 		console.log( fileList ); 
				// 		
				// 	} else {
				// 		console.log( formValidmsg ); 
				// 		console.log( formValid ); 
				// 		theme_notes.html('<ol></ol>').hide();
				// 		for ( msg in formValidmsg ) {
				// 			msgval = formValidmsg[ msg ];
				// 			theme_notes.find('ol').append( '<li>' + msgval + '</li>' );
				// 		}
				// 		// jQuery('div.theme_add_notes').html('<b>Please verify the URL you have entered.');
				// 		theme_notes.fadeIn(500); 
				// 	}
				// 
				// };
				// 	
				// 
				// jQuery('a.jqui-delete-theme'  ).click(function( e ) {
				// 	keyName = jQuery(this).parent().siblings(':first').text();
				// 	delete fileList[ keyName ];
				// 	console.log( fileList );
				// 	console.log( jQuery( this ).parent().parent() ); 
				// 	
				// 	
				// 	jQuery( this )
				// 		.parent()
				// 		.parent()
				// 		.hide( 'pulsate' , { times : '3' }, 'fast', function() {
				// 			jQuery( this ).remove();
				// 		});
				// 	
				// 	jQuery( fileList ).trigger('change');
				// 	return false;
				// });
				// 
				// 
				// jQuery('#jqui_theme_list table tbody tr td').dblclick(function() {
				// 	parent = jQuery(this).parent();
				// 	backUP = jQuery( this ).parent().html();
				// 	backUPUrl = jQuery( this ).text();
				// 	backUPName = jQuery( this ).prev().text();
				// 
				// 	jQuery('#theme_add_form').dialog({
				// 		width: 400,
				// 		title : 'Edit the theme - <bold>' + backUPName + '</bold>',
				// 		buttons : {
				// 			"Save" : function() {
				// 				insertDetails( 'edit', this );
				// 				jQuery( this ).dialog( 'close' );
				// 			},
				// 			"Cancel" : function() {
				// 				jQuery( this ).dialog( 'close' );
				// 			}
				// 		},
				// 		open : function( event, ui ) {
				// 			jQuery( '.ui-button:first' , '.ui-dialog-buttonset' )
				// 				.addClass('cancel-button');
				// 			jQuery( '.ui-button:last' , '.ui-dialog-buttonset' )
				// 				.addClass('save-button');
				// 			jQuery( 'input#jqui_theme_name' )
				// 				.val( backUPName );
				// 				
				// 			jQuery( 'input#jqui_theme_url' )
				// 				.val( backUPUrl );
				// 
				// 		},
				// 		beforeClose : function( event, ui ) {
				// 			jQuery( this ).find('input').val('');
				// 		},
				// 		close : function( event, ui ) {
				// 			jQuery( this ).dialog( 'destroy');
				// 		}
				// 
				// 	});
				// 	
				// });
				// 
				// jQuery( fileList ).bind('change', function() {
				// 	jQuery( '#jqui_custom_themes' ).val( JSON.stringify( fileList ) );
				// 	
				// });
			

		var context = new Array;

		context[0] = "<p style='background:#FFF; text-align: center; padding:4px; border: 1px solid #AAA'>Click on each tab for help on respective sections.</p><h3>WP UI - General options</h3><p>Enable/disable the plugin components.  This panel provides the following options.</p><h4><strong>Tabs</strong></h4><p>Uncheck the box to disable tabs. <em>Default is enabled</em>. Tabs are navigational widgets that are used to split context into alternative views. See the demo page for more information.</p><p><strong>Accordion</strong></p><p>Uncheck the box to disable accordions. <em>Default is enabled</em>. Accordions are vertically stacked list of items each of which can be clicked to expand the content associated with that item.</p><p><strong>Editor Buttons</strong></p><p>Wordpress post editor buttons makes it easy to insert the tabs into posts. Buttons are available for both Visual and HTML(recommended) mode editors.</p><p><strong>Navigation</strong></p>The tabs only navigation buttons, enables us to move through tabs sequentially without actually clicking one. Default : Bottom navigation buttons are enabled. </p><p><strong>Sliders</strong></p><p>Collapsibles/sliders/spoilers - you can call'em whatever you like! Content is hidden at load and is shown when user clicks the toggler. Use one , You've got a neat slider. Use multiple, you get smooth collapsible panels.</p>";
		context[1] = "<p style='background:#FFF; text-align: center; padding:4px; border: 1px solid #AAA'>Click on each tab for help on respective sections.</p><h3>WP UI - Style options</h3><h4>Load all styles.</h4><p>If enabled, all styles are loaded with the page and widgets with multiple styles can be shown at the same time.</p><p>Using the default style for the tabs/accordion. For e.g.</p><pre style='background:#FFF;  padding:4px; border-bottom: 1px dotted #AAA'>[wptabs] ..content.. [/wptabs]</pre><p>To use a different styled tabs on the same page, example:<pre style='background:#FFF; padding:4px; border-bottom: 1px dotted #AAA'>[wptabs style='wpui-dark'] ..Content..[/wptabs]</pre><h4>Tabs styles</h4><p>Choose the default styles for the tabs/accordion/sliders. Use the <code class='button-secondary'>visualize and select</code> button to interactively choose through a demo.</p> <blockquote><p><strong><em>Note: </em></strong>The visualize and select is only available for Bundled custom CSS3 styles. Check out the <a href=\"http://jqueryui.com/themeroller/#themeGallery\" title=\"jQuery UI themes\" target=\"_blank\">jQuery UI styles here</a>. </p> <p><em><strong>Note</strong> : As for this version, it is not recommended to use widgets with WP UI custom style and jQuery theme on the same page. jQuery UI themes may cause multiple style inconsistencies, like extra large font size, broken tab layouts. And moreover this varies with different wordpress themes.</em></p></blockquote> <h4>IE gradients</h4> <p>Choose whether to enable Internet Explorer gradients support, using microsoft<code> filter: </code>. A seperate stylesheet is additionally served for IE.</p>";
		context[2] = "<p style='background:#FFF; text-align: center; padding:4px; border: 1px solid #AAA'>Click on each tab for help on respective sections.</p><h3>WP UI - Effects options</h3><h4>Effects</h4><p>Two effects are available for now, slide and fade. Choose the default effect here.</p><p>Each tabset can have different tab effects, by defining through the shortcode. For e.g.</p><pre style='background:#FFF;  padding:4px; border-bottom: 1px dotted #AAA'>[wptabs effect='fade'] ..content.. [/wptabs]</pre><h4>Effects speed</h4><p>Effects speed is time, in which animating effect is run.  It can be a value in microseconds - 200, 600 or slow and fast. For a swift animation, limt the value within 1000ms. </p><h4>Tabs auto rotation</h4><p>Tabs can be set to  automatically rotate at specified intervals by passing the <code>rotate</code> attribute on the tabs wrapping shortcode. For eg.</p>	<pre style='background:#FFF;  padding:4px; border-bottom: 1px dotted #AAA'>[wptabs rotate=&quot;6000&quot;] ..content.. [/wptabs]<br />[wptabs rotate=&quot;10s&quot;] ..content.. [/wptabs]</pre><p>In the first example, tabs will be rotated i.e switched every 6 seconds ( 6000 is 6s in microseconds ). In the second example, rotate interval is 10s, so tab switch will occur every 10th second.</p>";
		context[3] = '<p style="background:#FFF; text-align: center; padding:4px; border: 1px solid #AAA">Click on each tab for help on respective sections.</p><h3>WP UI - Text options</h3><h4>Text replacements for the WP UI interface</h4><p>Enter a different value to override the default text - <br /> For tabs</p><ol>  <li>Button for switching to Previous tab</li>  <li>Button for switching to Next tab</li></ol><p>and for WP-spoilers aka Collapsibles/sliders.</p><ol> <li>Collapsible/spoilers Show (hidden) content text.</li><li>Collapsible/spoilers Hide (shown) content text.</li></ol>';
		context[4] = '<p style="background:#FFF; text-align: center; padding:4px; border: 1px solid #AAA">Click on each tab for help on respective sections.</p><h3>Advanced options</h3> <h4>Custom CSS</h4> Use this tab to output additional CSS. For example, this might be for a simple layout fix, or maybe your own skin. <h4>Alternative Shortcodes</h4> When enabled,  it is possible to use shorter codes , e.g <div><ul>	<li>[<strong>tabs</strong>] instead of [wptabs]</li><li>[<strong>tabname</strong>] instead of [wptabtitle]</li><li>[<strong>tabcont</strong>] instead of [wptabcontent]</li><li>[<strong>wslider</strong>] instead of [wpspoiler]</li></ul></div><h4><span style="color: #800000;">Disable jQuery loading</span></h4><div>Please be careful about this option. When checked, jquery will not be loaded by wp-ui. Thereby widgets will not be rendered, when globally jQuery/UI is not available.</div><h4>Cookies!</h4>Cookies are used to store information about the browser state. In our case jQuery UI tabs are able to remember the selected tabs across page reloads and re-visit.<h4>Linking and history</h4>With this option enabled, you can link to the tabs and have them activated on click without reload. History support, i.e. users can click the back button to re open the previous tabs.';


		if ( /\?page=wpUI-options/gm.test(window.location.href)) {

		var cTab = $admin_tabs.children('.ui-tabs').tabs('option', 'selected');

		jQuery(".metabox-prefs").html(context[cTab]);

		for( i = 0; i<context.length; i++ ) {
			$admin_tabs.bind("tabsshow, tabsselect", function(event, ui) {
				index = ui.index;
				jQuery('.metabox-prefs').html(context[index]);
			});
		}

		}	


});
