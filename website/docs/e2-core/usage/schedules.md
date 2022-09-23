# Scheduled jobs

You can easily define background jobs in your Directive that E2 Core will run on a schedule. Schedules run a set of steps, exactly like a handler. Schedules can be set up with an initial state to provide input.

```yaml
schedules:
  - name: atmo-report
    every:
      hours: 1
    state:
      repo: suborbital/atmo
    steps:
      - fn: ghstars

      - fn: send-report
        with:
          stargazers: ghstars
```

As you can see, you can choose how often the job runs using the `every` clause. You can set seconds, minutes, hours, or days (and you can combine them for values such as 'every 1 hour and 15 minutes').

If you need to change a SE2 module's behaviour to run in a schedule, you can check `req::method() == "SCHED"`. This can be useful when using the same SE2 module for both request handlers and schedules.


Setting the `state` clause will allow you to 'seed' the job with values, and that state will update after each step, just as with request handlers. 

See [state](../concepts/state.md) for more details.

Any issues running schedules (such as SE2 modules returning errors or any failures to execute the SE2 modules)will be logged, but nothing else.

