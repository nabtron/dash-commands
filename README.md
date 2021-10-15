# dash-commands-package

Converts any string into an object with key value based pairs

Flags used are "-" single dashes. 

## Example:

### For string: 

```
'-title sometitle -date 229939 -self "visibly interest is going on" -teri "chicken" -last \'one two \''
```

###The output will be:

```
{
  title: 'sometitle',
  date: '229939',
  self: 'visibly interest is going on',
  teri: 'chicken',
  last: 'one two'
}
```