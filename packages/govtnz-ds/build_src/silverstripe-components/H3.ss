<h3 class="<% if $styleSize == "xlarge" %>g-heading-xl<% else_if $styleSize == "large" %>g-heading-l<% else_if $styleSize == "medium" %>g-heading-m<% else_if $styleSize == "small" %>g-heading-s<% else_if $styleSize == "xsmall" %>g-heading-xs<% else_if $styleSize == "xxsmall" %>g-heading-xxs<% end_if %><% if $marginBottom8 %>  g-heading-mb-8<% end_if %>"<% if $id %> id="{$id}"<% end_if %>> {$children}
</h3>